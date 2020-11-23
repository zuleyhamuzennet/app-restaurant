import axios from "axios";
import '../../App.css'
import React,{useState} from "react";
import {Button, Modal} from "semantic-ui-react";


const Delete = ({product, push}) =>{

    const[open, setOpen]= useState(false);
    const[hata, setHata]= useState("");

    const show=()=>setOpen(true);
    const close=()=>setOpen(false);

    const handleDelete =(id)=>{
        axios
            .delete(`http://localhost:8080/delete/${id}`)
            .then(()=>{
                setHata("");
                //modal close
                close();
                // push to home
                push(`/list`)

            })
            .catch(()=>{
                setHata("yazıyı silerken hata oluştu");
            })
    }


    console.log(product);
    return(
        <React.Fragment>
            <Button color="red" onClick={show}>Delete</Button>
            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Delete Product</Modal.Header>
                <Modal.Content>
                    <p>bu yazıyı silmek istiyor musun?</p>
                    {hata&& <p>{hata}</p>}
                </Modal.Content>
                <Button negative onClick={close}>Cancel</Button>
                <Button positive icon="delete" labelPosition="right"
                        content="Yes"
                        onClick={()=>handleDelete(product.id)}
                />
            </Modal>
        </React.Fragment>
    )

}
export default Delete;