import React from "react";
import './Navbar.css';

const Navbar = ({ setShow}) => {
    return (
       <nav>
           <div className="nav_box">
           <span className="my_shop" onClick={() => setShow(true)}>
               TVS Motorcycles
               </span>
               <div className="cart" onClick={() => setShow(false)}>
                   <span>
                       <i className="fas fa-cart-plus"/>
                   </span>
               </div>
               <span>0</span>

           </div>
       </nav>

    );
}

export default Navbar;