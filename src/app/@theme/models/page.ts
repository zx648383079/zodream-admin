export interface IPaging {
    limit:  number;
    offset: number;
    total:  number;
}

export interface IPage<T> {
    paging: IPaging;
    data:   T[];
}
