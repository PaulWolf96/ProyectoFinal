import { Button, Container, Form } from "react-bootstrap";



const RegisterForm = () => {

    /*
    /** 
     * Declaración de hook de estado usado para almacenar los datos de cada input del form
    
    const [studentFormData, setStudentFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

    

  
  /**
   * Función que captura el cambio de valor en cada input del form
   * @param {*} event
   * 
   const handleInputChange = (event) => {
    setStudentFormData({
      ...studentFormData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Función que ejecuta el método POST saveStudent para guardar un estudiante al hacer submit
   * @param {*} event
   
  const handleSubmit = (event) => {
    event.preventDefault();
    saveStudent(studentFormData).then((response) => {
      if (response.status === 200) {
        setRefresh(Math.random());
      }
    });
  };

  */


    
    return (
        <Container className="my-2">
        
        <section>
            
            <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3'> Registrarse </h3>
            <Form className="mb-5" /*onSubmit={handleSubmit} */ >
            
                <Form.Group class="mb-3">
                    <Form.Label for="exampleInputtext1" >Nombre Completo</Form.Label>
                    <Form.Control type="text"  id="inputName" /*onChange={handleInputChange}*/></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label for="exampleInputPassword1">Contraseña</Form.Label>
                    <Form.Control type="password" id="inputPassword" /*onChange={handleInputChange}*/></Form.Control>
                </Form.Group>
                <Form.Group class="mb-3">
                    <Form.Label for="exampleInputEmail1" >Email</Form.Label>
                    <Form.Control type="email"  id="inputEmail" /*onChange={handleInputChange}*/></Form.Control>
                    <Form.Text> Nunca compartiremos su correo electrónico con alguien mas.</Form.Text>
                </Form.Group>
                <Button type="submit" variant="info" className="text-white" size="lg"  >Enviar</Button>
            </Form>  
          
        </section>
        
      
        </Container>
        
    );
}       

export default RegisterForm;