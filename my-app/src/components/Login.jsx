import React from 'react';
import '../componentsStyle/LoginStyle.css';



function Login() {


  
  return (
    <div>
    <div className="cabecera">
    <div className="form__container">
      <h1 className="form__ttl">Iniciar Sesion</h1>
        <form>
          <label className="form__label">Correo electrónico</label>
          <input
            type="email"
            className="form__input"
          /><br/>
          <label className="form__label">Contraseña</label>
          <input
            type="password"
            minlength="6"
            className="form__input form__input-pass"
          /><br/>

          <div className="form__btn__container">
            <button type="submit" className="form__btn">Ingresar</button>
          </div>
        </form>
        <div className="form__txtextra">
          <p>¿Aún no tienes cuenta?</p><a href='/Registro' className="form__txtextra__anchor">Registrate</a>
        </div>
        
        </div>
        
    </div>
    
    
    
    </div>
    
  )
}

export default Login