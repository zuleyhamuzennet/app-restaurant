import './App.css';
import ProductList from './components/ProductList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import TableCategory from "./components/TableCategory";
import Tables from "./components/Tables";
import CategoryTable from "./components/CategoryTable";
import Waiters from "./components/Waiters";



function App() {
    return (
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
    );
}

export default App;
