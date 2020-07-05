import React, {Component} from 'react';
import AddNewsButt from './addNews/addNewsButt/addNewsButt';
import Login from './login/login'
import './adminPanel.css'

class AdminPanel extends Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this)
    }

    state = {
        login: false
    };

    componentDidMount() {
        this.checkToken();
    }

    checkToken() {
        const timeNow = Date.now();
        const doba = 86400000;
        const token = localStorage.getItem('token');

        if (token) {
            let tokenTime = JSON.parse(token).time;
            if (tokenTime + doba <= timeNow) {
                localStorage.removeItem('token');
            } else {
                this.handler();
            }
        }
    }

    handler() {
        this.setState({
            login: true
        })
    }

    render() {
        // localStorage.removeItem('token');
        return (
            <div className="mainWrapper inputBox">
                {this.state.login ? <AddNewsButt/> : <Login handler={this.handler}/>}
            </div>
        )
    }
}

export default AdminPanel;