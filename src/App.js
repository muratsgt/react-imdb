import Movies from "./Movies"
import MovieDetail from "./MovieDetail"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/detail/:id" component={MovieDetail} exact/>
                <Route path="/" component={Movies} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default App;

