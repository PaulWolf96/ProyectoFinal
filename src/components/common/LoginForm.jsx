import { Button, Container, Form, FormLabel } from "react-bootstrap";
import '../../pages/Login/login.css';

const Login = () => {
    return (
      <Container className='flex-grow-1 my-2'>

<h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3 my-2'> Iniciar Sesion </h3>
      <Form className="mb-5">
  <Form.Group class="mb-3">
    <Form.Label for="exampleInputEmail1" class="form-label">Email</Form.Label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </Form.Group>
  <Form.Group class="mb-3">
    <Form.Label for="exampleInputPassword1" class="form-label">Contraseña</Form.Label>
    <Form.Control type="password" class="form-control" id="exampleInputPassword1"></Form.Control>
  </Form.Group>
 <div className="pb-3">
  <a href="" class="a-user">¿Olvidaste tu contraseña?</a><span> /</span>
          <a href="/register" class="a-user">Registrarse</a>
  </div>
  <Button variant="info" className="text-white" size="lg" type="submit">Enviar</Button>
</Form>

      
      </Container>
      
    );
}

export default Login;