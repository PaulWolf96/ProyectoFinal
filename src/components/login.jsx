import Footer from './footer';
import './login.css';
import NavBar from './navbar';

const Login = () => {
    return (
      <>
      <NavBar />
      <br></br>
      <form class="container">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
  <br></br>
  <br></br>
  <a href="" class="a-user">¿Olvidaste tu contraseña?</a><span> /</span>
          <a href="/register" class="a-user">Registrarse</a>
</form>
<br></br>
      <Footer/>
      </>
      
    );
}

export default Login;