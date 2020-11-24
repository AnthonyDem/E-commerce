import React from "react";
import "./header.style.scss";
import {ReactComponent as Crown} from "../../assets/svg/crown.svg"
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";


const Header = ({currentUser}) => {
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
                        <Link className="option" to="/">SIGN IN</Link>
                }
            </div>
        </div>
    );
};


export default Header;
