import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface ItemInCart {
    coffeeId: string,
    quantity: number
}

interface CartState {
    itemsInCart: ItemInCart[]
}

export function cartReducer(state: CartState, action: any){
    switch (action.type){
        case ActionTypes.ADD_ITEM_TO_CART: {
            const itemInCartIndex = state.itemsInCart.findIndex((item) => {
                return item.coffeeId === action.payload.coffeeId
            })

            if (itemInCartIndex < 0) {
                return produce(state, (draft) => {
                    draft.itemsInCart.push({
                        coffeeId: action.payload.coffeeId,
                        quantity: action.payload.quantity
                    })
                })
            }

            return produce(state, (draft) => {
                draft.itemsInCart[itemInCartIndex].quantity = draft.itemsInCart[itemInCartIndex].quantity + action.payload.quantity
            })
        }
        case ActionTypes.REMOVE_ITEM_FROM_CART: {
            const newItemCartData = state.itemsInCart.filter(item => item.coffeeId !== action.payload.coffeeId) 

            return produce(state, (draft) => {
                draft.itemsInCart = newItemCartData
            })    
        }
        case ActionTypes.UPDATE_ITEM_QUANTITY: {
            const itemInCartIndex = state.itemsInCart.findIndex((item) => {
                return item.coffeeId === action.payload.coffeeId
            })

            if (itemInCartIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.itemsInCart[itemInCartIndex].quantity = action.payload.quantity
            })
        }
        default: 
            return state
    }
}