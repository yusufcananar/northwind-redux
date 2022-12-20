import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if(categoryId){
        url = url + "?categoryId="+categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((response) => response.filter(product => product.unitsInStock > 0)) //Condition if stocks are 0 or less
      .then((response) => dispatch(getProductsSuccess(response)));
  }; 
}
