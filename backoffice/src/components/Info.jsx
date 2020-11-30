import React, {Component} from 'react';
import ServiceInfo from './service/ServiceInfo';
import Header from "./Header";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state={
            info:[],
            springActive:[]
        }
    }
    componentDidMount() {
        ServiceInfo.infoProperties().then((res)=>{
                this.setState({info:res.data})
            });
    }


    render() {
        return (
            <div>
                <Header/>
                <br/>
                <h2 className="text-center"> Application Properties</h2>
                <div className="row">
                    <div className="row">

                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.info.map(
                                info =>
                                    <tr key={info.key}>
                                        <td>{info.value}</td>
                                        <td>{info.key}</td>
                                    </tr>
                            )
                        }
                        </tbody>

                    </table>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.springActive.map(
                                springActive =>
                                    <tr key={springActive.key}>
                                        <td>{springActive.value}</td>
                                        <td>{springActive.key}</td>
                                    </tr>
                            )
                        }
                        </tbody>

                    </table>


                </div>
            </div>
        );
    }
}

export default Info;