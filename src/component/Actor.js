import React, {Component} from 'react';
import ReactPlayer from 'react-player'


class Actor extends Component {
    render() {
        return (
            <div className="section">
                <h1>I am an Actor</h1>
                <div >
                <ReactPlayer width='100%' url='https://vimeo.com/292412888' playing />
                </div>
            </div>
        );
    }
}

export default Actor;