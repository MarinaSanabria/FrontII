import React from "react";
import { Link } from "react-router-dom";
import "../componentsStyle/HeaderStyle.css";



function BotonAtras() {
   const cerrar = () => {
    const btnLogin = document.getElementById("btnLogin");
    btnLogin.style.setProperty("display", "inline-flex")
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.style.setProperty("display", "inline-flex")
    const btnAtras = document.getElementById("btnAtras");
    btnAtras.style.setProperty("display", "none")

  }

  return (
    <>
      <Link to="/"><button id="btnAtras" onClick={() => cerrar()} className="atras" > Inicio</button></Link>

    </>

  )}

export default BotonAtras;