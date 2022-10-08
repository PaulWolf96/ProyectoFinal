import React from "react";
import { Row } from "react-bootstrap";
import CardProductos from "./CardProductos";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        //La respuesta es exitosa
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }, []);
  return (
    <Row>
      {
        productos.map((producto)=> <CardProductos key={producto.codigo} {...producto}></CardProductos>)
      }
    </Row>
  );
};

export default ListaProductos;
