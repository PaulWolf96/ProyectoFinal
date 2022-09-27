import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import '../pages/contacto/contacto.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
    <>
    <Container fluid>
    <br></br>
    <h3>Dejanos tus sugerencias o reclamos aquí</h3>
    <br></br>
        
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sugerencias</Accordion.Header>
        <Accordion.Body>
        <Form.Control type="text" placeholder="Nombre y Apellido" />
        <br></br>
        <Form.Control type="email" placeholder="Email" />
        <br></br>
        <FloatingLabel controlId="floatingTextarea1" label="Comentario">
        <Form.Control
          as="textarea"
          placeholder="Has un comentario"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br></br>
      <Row>
        <Col xs={{ span: 9, offset: 9 }} sm={{ span: 0, offset: 0}}>
            <Button variant="primary" type="submit" size="sm">
            Enviar
            </Button>
        </Col>
      </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reclamos</Accordion.Header>
        <Accordion.Body>
        <Form.Control type="text" placeholder="Nombre y Apellido" />
        <br></br>
        <Form.Control type="email" placeholder="Email" />
        <br></br>
        <FloatingLabel controlId="floatingTextarea2" label="Comentario">
        <Form.Control
          as="textarea"
          placeholder="Has un comentario"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br></br>
      <Row>
        <Col xs={{ span: 9, offset: 9 }} sm={{ span: 0, offset: 0}}>
            <Button variant="primary" type="submit" size="sm">
            Enviar
            </Button>
        </Col>
      </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Preguntas Frecuentes</Accordion.Header>
        <Accordion.Body>
            <div>
                <p><a href="#">¿Como puedo publicar mis productos?</a></p>
                <p><a href="#">No me llegó mi producto ¿Que Hago?</a></p>
                <p><a href="#">¿Puedo devolver un producto?</a></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
    );
}

export default Contact;