import React, {Component} from 'react';
import loading from '../loading.gif'

class Loading extends Component {
    render() {
        return (
            <div className="loadingCSS">
                <div className="innerLoader">
                    <img src={loading}/>
                </div>
            </div>
        );
    }
}

export default Loading;