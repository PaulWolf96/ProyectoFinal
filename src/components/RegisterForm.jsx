import { Button, Container, Form } from "react-bootstrap";



const RegisterForm = () => {



    
    return (
        <Container className="my-2">
        
        <section>
            
            <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3'> Registrarse </h3>
            <Form className="mb-5">
            
                <Form.Group class="mb-3">
                    <Form.Label for="exampleInputtext1" >Nombre Completo</Form.Label>
                    <Form.Control type="text"  id="input1"></Form.Control>
                </Form.Group>
                <Form.Group class="mb-3">
                    <Form.Label for="exampleInputNumber1">Edad</Form.Label>
                    <Form.Control type="number"  id="input2"></Form.Control>
                </Form.Group>
                <Form.Group class="mb-3">
                    <Form.Label for="exampleInputEmail1" >Email</Form.Label>
                    <Form.Control type="email"  id="inputEmail" aria-describedby="emailHelp"></Form.Control>
                    <Form.Text> Nunca compartiremos su correo electrónico con alguien mas.</Form.Text>
                </Form.Group>
                <Button type="submit" variant="info" className="text-white" size="lg"  >Enviar</Button>
            </Form>  
          
        </section>
        
      
        </Container>
        
    );
}       

export default RegisterForm;