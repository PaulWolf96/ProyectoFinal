import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "../components/homeContacto";
import QuienesSomos from "../components/HomeQuienesSomos";
import Index from "../components/homeIndex";
import Login from "../components/login";
import Register from "../components/register";



const AppRoute = () => {
    return( 
        <Router>
            <Switch>
                <Route exact path="/home" component={Index} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/contacto" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default AppRoute;