import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Configs } from '../../@theme/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DiskService {

    static diskCache = {};

    /**
     * hasCache
     */
    public hasCache(id: number): boolean {
        return DiskService.diskCache.hasOwnProperty(id);
    }

    /**
     * getCache
     */
    public getCache(id: number): any {
        return DiskService.diskCache[id];
    }

    /**
     * setCache
     */
    public setCache(id: number, data: any) {
        DiskService.diskCache[id] = data;
    }

    /**
     * addCache
     */
    public addCache(id: number, data: any) {
        DiskService.diskCache[id].push(data);
    }

    /**
     * deleteCache
     */
    public deleteCache(index: any, id?: any) {
        if (typeof index === 'object') {
            [id, index] = [index, -1];
        }
        if (!this.hasCache(index)) {
            return;
        }
        if (id === void 0) {
            delete DiskService.diskCache[index];
            return;
        }
        for (let i = DiskService.diskCache[index].length - 1; i > 0; i -- ) {
            const item = DiskService.diskCache[index][i];
            if (id instanceof Array) {
                for (let j = id.length - 1; j > 0; j -- ) {
                    if (item.id === id[j]) {
                        DiskService.diskCache[index].splice(i, 1);
                        id.splice(j, i);
                    }
                }
            } else if (typeof id  === 'object') {
                if (id.id === item.id) {
                    DiskService.diskCache[index].splice(i, 1);
                    return;
                }
            } else if (item.id === id) {
                DiskService.diskCache[index].splice(i, 1);
                return;
            }

        }
    }

    constructor(private httpClient: HttpClient) { }

    /**
     * getList
     */
    public getList(param: any): Observable<any> {
        return this.httpClient.get(Configs.host + 'disk');
    }

    /**
     * deleteFile
     */
    public deleteFile(param: any): Observable<any> {
        return this.httpClient.post(Configs.host + 'disk/delete', param);
    }
}
