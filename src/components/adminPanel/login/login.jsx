import React, {Component} from 'react';
// import rp from "request-promise-any";
import './login.css'
// import option from "../../../option";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
            blockBtn: false,
        }
    }

    state = {};

    handleLoginChange(e) {
        this.setState({login: e.target.value})
    }

    handlePassChange(e) {
        this.setState({pass: e.target.value});
    }

    async send() {
        this.setState({blockBtn: true});
        // const options = {
        //     method: 'POST',
        //     uri: option.api + '/users/login',
        //     body: {
        //         login: this.state.login,
        //         password: this.state.pass
        //     },
        //     json: true
        // };

        // rp(options).then(res => {
        //     const token = {
        //         token: res.token,
        //         time: Date.now(),
        //     };
        //     localStorage.setItem('token', JSON.stringify(token));
        //     this.setState({
        //         result: 'Успішно!',
        //         blockBtn: false,
        //     });
        //     this.props.handler();
        // }).catch(err => {
        //     console.log(err);
        //     this.setState({
        //         result: 'Невірно!',
        //         blockBtn:false,
        //     });
        // });
    }

    render() {
        return (
            <div>
                <span>{this.state.result}</span>
                <h3>Вхід</h3>
                <label htmlFor="login">
                    <span>Логін:</span>
                    <input name="login" type="text" value={this.state.login} onChange={e => this.handleLoginChange(e)}/>
                </label>

                <label htmlFor="pass">
                    <span>Пароль:</span>
                    <input name="pass" type="password" value={this.state.pass}
                           onChange={e => this.handlePassChange(e)}/>
                </label>
                <button disabled={this.state.blockBtn} onClick={() => this.send()}>Відправити</button>
            </div>
        )
    }
}

export default Login;