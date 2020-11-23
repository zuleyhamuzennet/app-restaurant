import './App.css';
import ProductList from './components/ProductList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import MainPage from "./components/MainPage";


function App() {
    return (
        <Router>
            <div className="main-wrapper">

                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route exact path="/main" component={MainPage}/>
                    </Switch>
                </div>
        </Router>
    );
}

export default App;
