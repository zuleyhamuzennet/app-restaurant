import './App.css';
import AddProduct from './components/product/AddProduct';
import ProductList from "./components/product/ProductList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./components/user/UserList";
import UserAdd from "./components/user/UserAdd";
import UserUpdate from "./components/user/UserUpdate";
import UpdateProduct from "./components/product/UpdateProduct";
import Login from "./components/Login";
import ProductSales from "./components/product/ProductSales";
import AddCategory from "./components/category/AddCategory";
import CategoryList from "./components/category/CategoryList";
import Info from "./components/Info";
import TableCategoryAdd from "./components/tableCategory/TableCategoryAdd";
import TableCategoryList from "./components/tableCategory/TableCategoryList";
import DetailProduct from "./components/product/DetailProduct";
import WaiterAdd from "./components/waiter/WaiterAdd";
import WaiterList from "./components/waiter/WaiterList";
import AddMedia from "./components/media/AddMedia";
import React from 'react';
import CategoryDetail from "./components/category/CategoryDetail";
import UpdateCategory from "./components/category/UpdateCategory";
import AddRole from "./components/role/AddRole";
import ListRole from "./components/role/ListRole";
import UserDetail from "./components/user/UserDetail";
import TableCategoryUpdate from "./components/tableCategory/TableCategoryUpdate";
import WaiterUpdate from "./components/waiter/WaiterUpdate";
import WaiterDetail from "./components/waiter/WaiterDetail";
import AddCustomer from "./components/customer/AddCustomer";
import ListCustomers from "./components/customer/ListCustomers";
import UpdateCustomer from "./components/customer/UpdateCustomer";
import DetailCustomer from "./components/customer/DetailCustomer";
import {AuthProvider} from "./components/contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Login}></Route>
                        <Route exact path="/list" component={ProductList}></Route>
                        <Route exact path="/add" component={AddProduct}></Route>
                        <Route exact path="/update/:id" component={UpdateProduct}></Route>
                        <Route exact path="/adduser" component={UserAdd}></Route>
                        <Route exact path="/updateUser/:id" component={UserUpdate}></Route>
                        <Route exact path="/listuser" component={UserList}></Route>
                        <Route exact path="/sales" component={ProductSales}></Route>
                        <Route exact path="/add-category" component={AddCategory}></Route>
                        <Route exact path="/list-category" component={CategoryList}></Route>
                        <Route exact path="/add-table-category" component={TableCategoryAdd}></Route>
                        <Route exact path="/info" component={Info}></Route>
                        <Route exact path="/table-categories" component={TableCategoryList}></Route>
                        <Route exact path="/detail/:id" component={DetailProduct}></Route>
                        <Route exact path="/waiter-add" component={WaiterAdd}></Route>
                        <Route exact path="/waiters" component={WaiterList}></Route>
                        <Route exact path="/media" component={AddMedia}></Route>
                        <Route exact path="/category-detail/:id" component={CategoryDetail}></Route>
                        <Route exact path="/update-category/:id" component={UpdateCategory}></Route>
                        <Route exact path="/add-role" component={AddRole}></Route>
                        <Route exact path="/list-role" component={ListRole}></Route>
                        <Route exact path="/user-detail/:id" component={UserDetail}></Route>
                        <Route exact path="/update-table-category/:id" component={TableCategoryUpdate}></Route>
                        <Route exact path="/update-waiter/:id" component={WaiterUpdate}></Route>
                        <Route exact path="/detail-waiter/:id" component={WaiterDetail}></Route>
                        <Route exact path="/add-customer" component={AddCustomer}></Route>
                        <Route exact path="/list-customers" component={ListCustomers}></Route>
                        <Route exact path="/update-customer/:id" component={UpdateCustomer}></Route>
                        <Route exact path="/detail-customer/:id" component={DetailCustomer}></Route>


                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
