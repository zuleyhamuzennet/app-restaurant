import '../../App.css'
import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import Delete from "./Delete";
import { useParams, useHistory,useLocation } from "react-router-dom";


const Detail =(props)=>{
const{id}=(props.match.params);
const[productDetail, setProductDetail]=useState({});
const history = useHistory();
const location = useLocation();


}
export default Detail;