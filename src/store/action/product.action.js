import { ProductActionType } from '../actionType/index';
export const ProductAction = {
    add
};
function add(product) {
    return dispatch => {
        request();
        success(product);
    }
    function request() { return { type: ProductActionType.ADD_PRODUCT_INIT } }
    function success(product) { return { type: ProductActionType.ADD_PRODUCT_SUCCESS, product } }
    //function failure(error) { return { type: ProductActionType.ADD_PRODUCT_FAILURE, error } }
}