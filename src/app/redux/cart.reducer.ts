import { CartActions, ADD_TO_CART, REMOVE_TO_CART } from './cart.actions';

const estadoInicialCart: any[] = [];

export function cartReducer (state = estadoInicialCart, action: CartActions): any[] {

    switch (action.type) {
        case ADD_TO_CART:
            return state;
        case REMOVE_TO_CART:
            return state;
        default:
            return state;
    }
}
