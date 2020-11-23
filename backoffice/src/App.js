import './App.css';
import AddProduct from './components/product/AddProduct';
import ProductList from "./components/product/ProductList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import PersonList from "./components/person/PersonList";
import AddPerson from "./components/person/AddPerson";
import UpdatePerson from "./components/person/UpdatePerson";
import UpdateProduct from "./components/product/UpdateProduct";
import Login from "./components/Login";
import ProductSales from "./components/product/ProductSales";



function App() {

    return (
        <div>

            <Router>

                    <div className="container">
                        <br/>
                        <Header/>
                        <br/> <br/>
                        <Switch>
                            <Route exact path="/" component={Login}></Route>
                            <Route exact path="/list" component={ProductList}></Route>
                            <Route exact path="/add" component={AddProduct}></Route>
                            <Route exact path="/update/:id" component={UpdateProduct}></Route>
                            <Route exact path="/adduser" component={AddPerson}></Route>
                            <Route exact path="/updateUser/:id" component={UpdatePerson}></Route>
                            <Route exact path="/listuser" component={PersonList}></Route>
                            <Route exact path="/sales" component={ProductSales}></Route>

                        </Switch>
                    </div>

            </Router>
        </div>
    );
}

export default App;
