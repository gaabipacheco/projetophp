import React from 'react';

import "./style.css";
import imagem from './catiorro.jpg'

console.log(imagem);
const Header = () =>{
    return <header className ="jumbotron" id="main=header"><img src={imagem} height="100%" width="auto" /></header>
}
export default Header;