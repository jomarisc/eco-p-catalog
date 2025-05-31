import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <div className="p-4 border-b-2  flex w-screen justify-between items-center">
            <h1>DigitalNEST Shop</h1>
            <FontAwesomeIcon icon={faCartShopping} className="pr-2" size="lg"/>
        </div>
    );
}

export default Header;