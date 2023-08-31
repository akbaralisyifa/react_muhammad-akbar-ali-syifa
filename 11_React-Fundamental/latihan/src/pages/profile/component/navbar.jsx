import React from "react";

function Navbar({text}){
    return(
        <div className="Navbar">
            <h4 className="navText">{text}</h4>
            <ul className="navList">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}


export default Navbar;
