import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import {clearItemFromCart} from "../../redux/cart/cart.actions";


const CheckoutItem = ( {cartItem, itemClear} ) => {
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove" onClick={() => itemClear(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
   itemClear: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
