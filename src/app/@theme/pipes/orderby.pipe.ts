import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {

    private static _orderByComparator(a: any, b: any): number {
        if (a === null || typeof a === 'undefined') {
            a = 0;
        }
        if (b === null || typeof b === 'undefined') {
            b = 0;
        }

        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        } else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }

        return 0; // equal each other
    }

    transform(input: any, sort?: string, order?: string): any {

        // invalid input given
        if (!input) {
            return input;
        }

        if (!order && (sort === 'desc' || sort === 'asc')) {
            [sort, order] = [undefined, sort];
        }

        if (!order) {
            return input;
        }

        // make a copy of the input's reference
        const value = [...input];

        if (!Array.isArray(value)) {
            return value;
        }

        if (!sort) {
            return order === 'asc' ? value.sort() : value.sort().reverse();
        }

        return value.sort(function(a: any, b: any) {
            let aValue = a[sort];
            let bValue = b[sort];

            const propertySplit = sort.split('.');
            if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                aValue = a;
                bValue = b;
                for (let j = 0; j < propertySplit.length; j++) {
                    aValue = aValue[propertySplit[j]];
                    bValue = bValue[propertySplit[j]];
                }
            }

            return order === 'asc'
                ? OrderByPipe._orderByComparator(aValue, bValue)
                : -OrderByPipe._orderByComparator(aValue, bValue);
        });
    }
}
