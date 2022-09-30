import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "../components/homeContacto";
import QuienesSomos from "../components/HomeQuienesSomos";
import Index from "../components/homeIndex";
import AcercaDeNosotros from "../pages/quienessomos/AcercaDeNosotros";



const AppRoute = () => {
    return( 
        <Router>
            <Switch>
                <Route exact path="/home" component={Index} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/contacto" component={Contact} />
                <Route exact path="/acercadenosotros" component={AcercaDeNosotros} />
                
            </Switch>
        </Router>
    )
}

export default AppRoute;