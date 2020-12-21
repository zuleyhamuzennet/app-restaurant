import React,{Component,createContext} from "react";

const ContextUser=createContext()

class ContextUserProvider extends Component{
    state={
        username:'',
        password:'',
    }
    setUsername=(username)=>{
        this.setState((prevState)=>({username}))
    }
    setPassword=(password)=>{
        this.setState((prevState)=>({password}))
    }

    render() {
        const {children}= this.props;
        const {username}=this.state;
        const {password}=this.state;
        const {setUsername}=this;
        const {setPassword}=this;

        return(
            <ContextUser.Provider value={{username,setUsername,password,setPassword}}>
                {children}
            </ContextUser.Provider>
        );
    }
}
export default ContextUser
export {ContextUserProvider}
