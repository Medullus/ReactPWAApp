import {ProductActionType} from '../actionType/index'
import product from '../data/products.json'
let data=product
const initialState = {ProductData:data};
export function Product(state = initialState, action) {
    switch (action.type) {
        case ProductActionType.ADD_PRODUCT_INIT:
        return {
        ...state
        };
        case ProductActionType.ADD_PRODUCT_SUCCESS:
        return {
        ...state
        };
        case ProductActionType.ADD_PRODUCT_FAILURE:
        return {
        ...state
        };
        default:
      return state
    }
}