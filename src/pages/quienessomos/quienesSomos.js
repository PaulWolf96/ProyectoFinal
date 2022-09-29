import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import "bootstrap/dist/css/bootstrap.min.css"
import './QuienesSomos.css';
import HomeQuienesSomos from "./components/HomeQuienesSomos"


const QuienesSomos = () => {
    return (
     <>
      <Navbar/>
      <HomeQuienesSomos/>
      <Footer/>

     </>
    )
}

export default QuienesSomos;