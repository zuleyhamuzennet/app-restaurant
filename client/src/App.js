import './App.css';
import ProductList from './components/ProductList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import TableCategory from "./components/TableCategory";
import Tables from "./components/Tables";
import Waiters from "./components/Waiters";
import React,{useState, useEffect} from "react";
import axios from 'axios';
import {UserContext,users} from "./components/Context";

function App() {


    return (
        <UserContext.Provider value={users}>
        <Router>
            <div className="main-wrapper">

                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route exact path="/main" component={MainPage}/>
                        <Route exact path="/table-category" component={TableCategory}/>
                        <Route exact path="/tables" component={Tables}/>
                        <Route exact path="/waiters" component={Waiters}/>

                    </Switch>
                </div>
        </Router>
        </UserContext.Provider>
    );
}

export default App;
