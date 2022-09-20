import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>lorem kjsdhfgfhshhdjsgdjfsjdfsjkhgksjhdgjhsgdjfhgskjdhfgsjdhgfjsdhgfsdfsdfsdf</Col>
        <Col>lorem kjsdhfgfhshhdjsgdjfsjdfsjkhgksjhdgjhsgdjfhgskjdhfgsjdhgfjsdhgfsdfsdfsdf</Col>
        <Col>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav></Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;