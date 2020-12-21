import React, {Component} from 'react';
import loading2 from '../loading2.gif'

class Loading extends Component {
    render() {
        return (
            <div className="loadingCSS">
                <div className="innerLoader">
                    <img src={loading2}/>
                </div>

            </div>
        );
    }
}

export default Loading;