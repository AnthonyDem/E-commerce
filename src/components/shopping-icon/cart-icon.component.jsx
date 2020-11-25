import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";
import "./cart-icon.style.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">o</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(null,mapDispatchToProps)(CartIcon);

