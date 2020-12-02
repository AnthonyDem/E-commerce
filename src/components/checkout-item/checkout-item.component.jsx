import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import {clearItemFromCart, addItem, moveItemCount } from "../../redux/cart/cart.actions";


const CheckoutItem = ( {cartItem, itemClear, addItem, removeItem} ) => {
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove" onClick={() => itemClear(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
   itemClear: item => dispatch(clearItemFromCart(item)),
   addItem: item => dispatch(addItem(item)),
   removeItem: item => dispatch(moveItemCount(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
