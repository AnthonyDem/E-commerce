import React from "react";
import "./header.style.scss";
import {ReactComponent as Crown} from "../../assets/svg/crown.svg"
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../shopping-icon/cart-icon.component";
import CartDropdown from "../cart-component/cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden} from "../../redux/cart/cart.selectors";
import { selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/' >
                <Crown className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/sign-in">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null :   <CartDropdown/>   }

        </div>
    );
};


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
