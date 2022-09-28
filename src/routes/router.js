import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "../components/homeContacto";
import QuienesSomos from "../components/homeQuienesSomos";
import Index from "../components/homeIndex";



const AppRoute = () => {
    return( 
        <Router>
            <Switch>
                <Route exact path="/home" component={Index} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/contacto" component={Contact} />
            </Switch>
        </Router>
    )
}

export default AppRoute;