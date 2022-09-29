import "bootstrap/dist/css/bootstrap.min.css"
import './AcercaDeNosotros.css';
import Descripcion from "./components/Descripcion";
import Imagen from "./components/Imagen";
  

const AcercaDeNosotros= () => {
  const integrantes = [
     { nombre: "Facundo Jerez",
       foto: "https://pbs.twimg.com/profile_images/1537100523953856513/Ne7wKZW8_400x400.jpg",
       instagram: "", 
       descripcion: "Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo",

    },
    { nombre: "Pablo Lobo",
       foto: "",
       instagram: "", 
       descripcion: "Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo",

    },
    { nombre: "Diana Constanza",
       foto: "",
       instagram: "", 
       descripcion: "Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo",

    }
  ]
    return (
    <section className="container ">
    <article className="d-flex flex-wrap align-items-center bg-grisOscuro justify-content-around py-2"> 
      <Descripcion Integrante ={integrantes[0]}>
      </Descripcion>
      <Imagen Foto={integrantes[0]}>
      </Imagen>
    </article>
    <article className="d-flex flex-column-reverse flex-md-row flex-wrap align-items-center bg-gris justify-content-around py-2 my-3"> 
      <Imagen Foto={integrantes[0]}>
      </Imagen>
      <Descripcion Integrante ={integrantes[1]}>
      </Descripcion>
    </article>
    <article className="d-flex flex-wrap align-items-center bg-grisOscuro justify-content-around py-2"> 
      <Descripcion Integrante ={integrantes[2]}>
      </Descripcion>
      <Imagen Foto={integrantes[0]}>
      </Imagen>
    </article>
    
    </section>
  );
}

export default AcercaDeNosotros;
