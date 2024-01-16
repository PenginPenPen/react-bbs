import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import'./destyle.css';
function Header() {
    return(
        <header class="">
        <Link to ="/"><h1 class="HeaderText">掲示板</h1></Link>
        <div class="CreateThread">
            <Link to ="/thread/new">スレッドをたてる</Link>
        </div>
        </header>
    );
}

export default Header;