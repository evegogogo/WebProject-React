import React, { Component } from 'react';
import './style/authPage.css';
import AuthContext from './context/auth-context';

class authPage extends Component {
    state = {
        isLogin: true
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }

    switchModeHandler = (e) => {
        this.setState(prevState => {
            return { isLogin: !prevState.isLogin };
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const email = this.email.current.value;
        const password = this.password.current.value;

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        // console.log(email, password);

        let requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        id
                        token
                        tokenExpiration
                    }
                }
            `
        };

        if (!this.state.isLogin) {
            requestBody = {
                query: `
                    mutation {
                        addUser(email: "${email}", password: "${password}") {
                            id
                            token
                            tokenExpiration
                        }
                    }
                `
            };
        }


        fetch('http://localhost:5000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
            if (this.state.isLogin && resData.data.login.token) {
                this.context.login(
                    resData.data.login.token,
                    resData.data.login.id,
                    resData.data.login.tokenExpiration
                );
            } else if (!this.state.isLogin && resData.data.addUser.token) {
                this.context.login(
                    resData.data.addUser.token,
                    resData.data.addUser.id,
                    resData.data.addUser.tokenExpiration
                );
            }
        })
        .catch(err => {
            console.log(err);
        });
    };
    
    render() { 
        return ( 
            <form className="auth-form" onSubmit={this.submitHandler} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={this.email} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={this.password} />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'SignUp' : 'Login'}</button>
                </div>
            </form>
         );
    }
}
 
export default authPage;