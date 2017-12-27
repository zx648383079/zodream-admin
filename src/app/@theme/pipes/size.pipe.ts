import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'size'
})
export class SizePipe implements PipeTransform {
    transform(value: number): string {
        if (!value) {
            return '--';
        }
        const k = 1000, // or 1024
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(value) / Math.log(k));
        return (value / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }
}
