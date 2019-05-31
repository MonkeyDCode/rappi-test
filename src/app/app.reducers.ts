
import { ActionReducerMap } from '@ngrx/store';
import { dataReducer } from './redux/data.reducer';
import { cartReducer } from './redux/cart.reducer';
export interface AppState {
    data: {categories: any[], products: any[], viewlist: any[], filtro: 'ninguno'};
    cart: any[];
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
    data: dataReducer,
};


