import './login.css';

const Login = () => {
    return (
      
      <div class="div-usuario">
        <div class="div-usuario-img">
          <img src="image1.png" alt="" class="img-user"></img>
        </div>
        <div class="div-usuario-user">
          <div class="form-user" id="">
            <h2 class="h2-user">Iniciar Sesión</h2>
            <label for="user" class="label-user">Escriba su nombre de usuario</label><br></br>
            <input type="text" class="input-user" id="user" />
            <br></br>
            <label for="pass" class="label-user">Escriba su contraseña</label><br></br>
            <input type="password" class="input-user" id="pass" />
            <div id="divForm"></div>
            <input type="checkbox" id="check"/>
            <label for="check">Recordarme</label>
            <br></br>
            <button type="submit" id="button">Ingresar</button>
            <br></br>
            <a href="" class="a-user">¿Olvidaste tu contraseña?</a><span> /</span>
            <a href="registro.html" class="a-user">Registrarse</a>
          </div> 
        </div>
      </div>
    );
}

export default Login;