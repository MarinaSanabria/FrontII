import React from "react";
import "../componentsStyle/HeaderStyle.css";


function BotonRegister() {


    const register =() =>{
        const btnlogin = document.getElementById("btnLogin");
        btnlogin.style.display = 'inline-flex'
        const btnAtras = document.getElementById("btnAtras");
        btnAtras.style.display = 'inline-flex'
        const btnRegister = document.getElementById("btnRegister");
        btnRegister.style.display = 'none'
//        btnAtras.style.display = 'inline-flex'

      }


return(
    <>
<button onClick={()=>register()} id="btnRegister" className="boton" ><p>Crear Cuenta</p> </button>
    </>

)

}


export default BotonRegister;