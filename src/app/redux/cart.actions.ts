import {Action} from '@ngrx/store';


export const ADD_TO_CART = '[CART] add to cart';
export const REMOVE_TO_CART = '[CART] remove to cart';
export const MODIFY_TO_CART = '[CART] Modify to cart';

export class AddCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public id: number) {}
}

export class RemoveCart implements Action {
    readonly type = REMOVE_TO_CART;
    constructor(public id: number) {}
}
export class ModifyCart implements Action {
    readonly type = MODIFY_TO_CART;
    constructor(public id: number, quantity: string) {}
}

export type CartActions = AddCart |
                            RemoveCart;
