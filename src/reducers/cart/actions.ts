import { CheckoutData } from "../../pages/Checkout";
import { ItemInCart } from "./reducer";

export enum ActionTypes {
    ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
    UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
    FINISH_ORDER = "FINISH_ORDER"
}

export function addItemToCart({quantity, coffeeId}: ItemInCart){
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload:{
            quantity,
            coffeeId
        }
    }
}

export function removeItemFromCart(coffeeId : string){
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload:{
            coffeeId
        }
    }
}

export function updateItemQuantity(coffeeId : string, quantity : number){
    return {
        type: ActionTypes.UPDATE_ITEM_QUANTITY,
        payload:{
            coffeeId,
            quantity
        }
    }
}

export function finishOrder(data: CheckoutData, paymentMethod: string){
    return {
        type: ActionTypes.FINISH_ORDER,
        payload:{
            data,
            paymentMethod
        }
    }
}

