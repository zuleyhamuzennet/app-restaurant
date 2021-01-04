import './App.css';
import ProductList from './components/ProductList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import TableCategory from "./components/TableCategory";
import Tables from "./components/Tables";
import Waiters from "./components/Waiters";
import React,{} from "react";
import {ContextUserProvider} from "./components/ContextUser";
import CustomerAdd from "./components/CustomerAdd";
import ListCustomer from "./components/ListCustomer";

const valueProvider={username:'admin', password:'admin'}
function App() {

    return (
        <ContextUserProvider value={valueProvider}>
        <Router>
            <div className="main-wrapper">

                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route exact path="/main" component={MainPage}/>
                        <Route exact path="/table-category" component={TableCategory}/>
                        <Route exact path="/tables" component={Tables}/>
                        <Route exact path="/waiters" component={Waiters}/>
                        <Route exact path="/customers" component={CustomerAdd}/>
                        <Route exact path="/list-customer" component={ListCustomer}/>

                    </Switch>
                </div>
        </Router>
        </ContextUserProvider>
    );
}

export default App;
