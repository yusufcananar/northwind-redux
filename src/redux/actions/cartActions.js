import { act } from "react-dom/test-utils";
import * as actionTypes from "./actionTypes";

export function addToCart(cartItem){
    return{
        type:actionTypes.ADD_TO_CART, payload:cartItem
    }
}


export function removeFromCart(product){
    return{
        type:actionTypes.REMOVE_FROM_CART, payload:product
    }
}

export function increaseQuantity(cartItem){
    return {
        type:actionTypes.INCREASE_QUANTITY, payload:cartItem
    }
}

export function decreaseQuantity(cartItem){
    return {
        type:actionTypes.DECREASE_QUANTITY, payload:cartItem
    }
}