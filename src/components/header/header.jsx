import { Burger } from "./burger_menu/burger";
import "./header.css"
import React from "react";
//import Logo from "./img/logo.svg"


export const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        {/*<img className="logo" alt="Logo" src={Logo} />*/}
        <nav>
          <a></a>
          <a></a>
          <a></a>
        </nav>
        <Burger/>
      </div>
    </header>  
    );
};


 