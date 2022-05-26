import React from 'react';
import'../componentsStyle/RegistroStyle.css';

function Registro() {
    return (
        <div className="main__container">
            <div className="form__container">
            <h1 className="form__ttl">Crear cuenta</h1>
            <form action="" method="post">
                <div className="form__nombreapellido">
                    <div>
                        <label for="email" className="form__label">Nombre</label>
                        <input type="text" name="email" id="email" className="form__input form__input-nombreapellido"/>
                    </div>
                    <div>
                        <label for="email" className="form__label form__input-nombreapellido-derecha">Apellido</label>
                        <input type="text" name="email" id="email"
                            className="form__input form__input-nombreapellido form__input-nombreapellido-derecha"/><br/>
                    </div>
                </div>

                <label for="email" className="form__label">Correo electrónico</label>
                <input type="text" name="email" id="email" className="form__input"/><br/>
                <label for="password" className="form__label">Contraseña</label>
                <input type="password" name="password" id="password" minlength="6"
                    className="form__input form__input-pass"/><br/>
                <label for="password" className="form__label">Confirmar contraseña</label>
                <input type="password" name="password" id="password" minlength="6" className="form__input"/><br/>


                <div className="form__btn__container">
                    <button type="submit" className="form__btn">Crear cuenta</button>
                </div>

            </form>
            <div className="form__txtextra">
                <p>¿Ya tienes una cuenta?</p><a href="/Login" className="form__txtextra__anchor">Iniciar sesión</a>
            </div>



            </div>

        </div>
      
    )
  }




/*
function Registro() {
  return (
      <div className="main__container">
    <div className="form__container">
        <h1 className="form__ttl">Crear cuenta</h1>

            <form>
                <div className="form__flex">
                    <div className="form__items form__items__flex">
                        <label className="form__label">Nombre</label>
                        <input type="text"/>
                    </div>

                    <div className="form__items form__items__flex">
                    <label className="form__label" >Apellido</label>
                        <input type="text"/><br/>
                    </div>
                </div>
                <div className="form__items">
                    <label className="form__label">Correo electrónico</label>
                    <input type="email" name="email" id="email"/><br/>
                </div>
                
                <div className="form__items">
                    <label className="form__label">Contraseña</label>
                    <input type="password" minlength="6"
                    className="form__input__pass"/><br/>
                </div>

                <div className="form__items">
                    <label className="form__label">Confirmar contraseña</label>
                    <input type="password" minlength="6" classNAme="form__input__passt"/>
                </div>

                <div className="form__btn__container">
                    <div>
                        <button type="submit" className="form__btn">Crear cuenta</button>
                    </div>
                </div>

                <div className="">
                    <p>¿Ya tienes una cuenta?<a href='/Login' className="form__txtextra__anchor">Iniciar sesión</a></p>
                </div>
            </form>
            
    </div>

    

    </div>
    
  )
}
*/
export default Registro


