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
                        <div className="navbar-brand" ><button onClick={(e)=>goProduct(e)} className="navbar-brand">Products</button></div>
                       <div><button onClick={(e)=>goUser(e)}  className="navbar-brand">Users</button></div>
                        <div><button onClick={(e)=>goWaiter(e)}  className="navbar-brand">Waiters</button></div>
                        <div><button onClick={(e)=>goCategory(e)} className="navbar-brand">Categories</button></div>
                        <div><button onClick={(e)=>goTable(e)} className="navbar-brand">Tables</button></div>
                        <div><button onClick={(e)=>goRole(e)}  className="navbar-brand">Roles</button></div>
                        <div><button onClick={(e)=>goSales(e)} className="navbar-brand">Sales</button></div>
                        <div><button onClick={(e)=>goInfo(e)}className="navbar-brand">Info</button></div>
                        <div><button onClick={(e)=>goMedia(e)} className="navbar-brand">Media</button></div>
                        <div><button  className="navbar-brand"><button className="btn btn-danger" onClick={()=>{logout()}} style={{position:'absolute',right:'5px' ,marginTop:'-18px'}}>Logout</button></button></div>
                    </nav>
                </header>
            </div>
        );

}

export default Header;