import React, {Component} from 'react';
import { useHistory } from "react-router-dom";


const Header =(props)=> {
   const history = useHistory();

    const goProduct=(e)=>{
        e.preventDefault();
        history.push("/list");
    }
    const goUser=(e)=>{
        e.preventDefault();
        history.push("/listUser");
    }
  const  goWaiter=(e)=>{
        e.preventDefault();
        history.push("/waiters");
    }
    const goCategory=(e)=>{
        e.preventDefault();
        history.push("/list-category");
    }
    const goTable=(e)=>{
        e.preventDefault();
        history.push("/table-categories");
    }
    const goRole=(e)=>{
        e.preventDefault();
        history.push("/list-role");
    }
    const goSales=(e)=>{
        e.preventDefault();
        history.push("/sales");
    }
    const goInfo=(e)=>{
        e.preventDefault();
        history.push("/info");
    }
    const goMedia=(e)=>{
        e.preventDefault();
        history.push("/media");
    }
    const goCustomer=(e)=>{
        e.preventDefault();
        history.push("/list-customers");
    }
    const logout=()=>{
        if (localStorage.getItem('username') !== null) {
            localStorage.removeItem('username');
        }
        if (localStorage.getItem('password') !== null) {
            localStorage.removeItem('password');
        }

        history.push("/");

    }


        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{marginTop:"20px"}}>
                        <div><h2 className="navbar-brand">Back-Office:</h2></div>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white" ,border: "30rem"}} onClick={(e)=>goProduct(e)} className="navbar-brand">Products</button>
                       <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goUser(e)}  className="navbar-brand">Users</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goWaiter(e)}  className="navbar-brand">Waiters</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goCategory(e)} className="navbar-brand">Categories</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goTable(e)} className="navbar-brand">Tables</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goRole(e)}  className="navbar-brand">Roles</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goSales(e)} className="navbar-brand">Sales</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goInfo(e)}className="navbar-brand">Info</button>
                       <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goCustomer(e)} className="navbar-brand">Customer</button>
                        <button style={{backgroundColor:'rgba(40,39,39,0.07)', color:"white",border: "30rem"}} onClick={(e)=>goMedia(e)} className="navbar-brand">Media</button>
                       <button className="btn btn-danger" onClick={()=>{logout()}} style={{position:'absolute',right:'5px' ,marginTop:'-18px'}}>Logout</button>
                    </nav>
                </header>
            </div>
        );

}

export default Header;