import { Route, Router, Switch } from "react-router-dom"



const appRoute = () => {
    return( 
        <Router>
            <Switch>
                <Route exact path="/home" component={homeIndex} />
                <Route exact path="/quienessomos" component={homeQuienesSomos} />
                <Route exact path="/contacto" component={homeContacto} />
            </Switch>
        </Router>
    )
}

export default appRoute;