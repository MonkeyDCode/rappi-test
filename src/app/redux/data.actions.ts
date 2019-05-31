import {Action} from '@ngrx/store';


export const AGREGAR_DATA = '[Cats] Agregar cats';
export const FILTER_BY_CAT = '[PRODS] Filter by ID';
export const FILTER_BY_NAME = '[PRODS] Filter by NAME';
export const SORT_DATA = '[PRODS] SORT data';
export class FilterIDProductos implements Action {
    readonly type = FILTER_BY_CAT;
    constructor(public id: number, public filtro: string) {}
}

export class FilterNameProductos implements Action {
    readonly type = FILTER_BY_NAME;
    constructor(public id: number, public text: string, public filtro: string) {}
}

export class AgregarData implements Action {
    readonly type = AGREGAR_DATA;
    constructor(public data: any) {}
}

export class SortData implements Action {
    readonly type = SORT_DATA;
    constructor(public sort: string) {}
}



export type DataActions = AgregarData|
                            FilterIDProductos |
                            FilterNameProductos|
                            SortData;

