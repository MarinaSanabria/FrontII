import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotonAtras from "./BotonAtras";
import BotonRegister from "./BotonRegister";
import "../componentsStyle/HeaderStyle.css";
import Logged from "./Logged";
import BotonLogin from "./BotonLogin";
import logo from '../img/logo 1.png';
import logo_texto from '../img/texto_logo.png';



export default function Header() {
    localStorage.setItem("logeado", true)
    window.localStorage.setItem("usuario", "Bruno Diaz")

    const [logeado, setLogeado] = useState();
    useEffect(() => {
        const item = (window.localStorage.getItem("logeado") === 'false') ? true : false;
        if (item) setLogeado(item);

    }, []);



    return (
        < >
            <header className="header">
                <Link to="/"> 
                <div className="header__img__container">
        
                    <img className="logo" src={logo} alt="logo" />
                    <img className="logo_txt" src={logo_texto} alt="Frase" />
                </div>
                
                
                </Link>
                {logeado ?
                    <Logged />
                    :
                    <div className="header__derechaContainer">
                        <Link to="faq"> <BotonRegister /></Link>
                        <Link to="main"><BotonLogin /></Link>
                        <Link to="/"><BotonAtras /></Link>


                    </div>
                }

            </header>

        </>


    )
}

