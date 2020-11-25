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
