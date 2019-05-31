import { DataActions, AGREGAR_DATA, FILTER_BY_CAT, FILTER_BY_NAME, SORT_DATA } from './data.actions';
import * as _ from 'lodash';
const estadoInicial: any = {};

export function dataReducer (state = estadoInicial, action: DataActions) {

    switch (action.type) {
        case AGREGAR_DATA:
            return {...action.data};
        case FILTER_BY_CAT:
            return {
                    ...state,
                    filtro: action.filtro,
                    viewlist: state.products.filter(
                        item => item.sublevel_id === action.id)
                    };
        case FILTER_BY_NAME:
            const filterid = state.products
                        .filter(item => item.sublevel_id === action.id);
            return {
                ...state,
                filtro: `Buscar '${action.text}' en '${action.filtro}'.`,
                viewlist: filterid
                            .filter(item => item.name.includes(action.text))
                } ;
        case SORT_DATA:
            let viewlist;
            if ( action.sort === 'price') {
                viewlist = state.viewlist.sort(function (a, b) {
                if (Number(a.price.replace('$', '').replace(',', '') ) > Number(b.price.replace('$', '').replace(',', '') )) {
                    return 1;
                }
                if (Number(a.price.replace('$', '').replace(',', '') ) < Number(b.price.replace('$', '').replace(',', '') )) {
                    return -1;
                }
                return 0;
            });

            } else {
                viewlist =  _.sortBy(state.viewlist, [action.sort]);
            }
            return {...state,
                viewlist: viewlist
            };
        default:
            return state;
    }
}

