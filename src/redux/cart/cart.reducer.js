import cartActionsTypes from "./cart.types";
import { addItemToCart, removeCartItems } from "./cart-items.utils";
import {selectCartItems} from "./cart.selectors";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionsTypes.MOVE_ITEM_COUNT:
            return {
                ...state,
                cartItems: removeCartItems(state.cartItems, action.payload)
            }
        case cartActionsTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }

}

export default cartReducer;
