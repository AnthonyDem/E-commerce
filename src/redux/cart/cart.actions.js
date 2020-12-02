import cartActionsTypes from "./cart.types";

export const toggleCartHidden = () => {
    return ({
        type: cartActionsTypes.TOGGLE_CART_HIDDEN
    });
};

export const addItem = item => {
  return ({
     type: cartActionsTypes.ADD_ITEM,
     payload: item
  });
};

export const clearItemFromCart = item => {
    return ({
       type: cartActionsTypes.CLEAR_ITEM_FROM_CART,
       payload: item
    });
};

export const moveItemCount = item => {
    return ({
        type: cartActionsTypes.MOVE_ITEM_COUNT,
        payload: item
    })
}
