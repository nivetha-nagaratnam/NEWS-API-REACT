import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import App from '../App'

class LoginPage extends Component {

    state = {
        userName: "",
        redirect: "false"
      };

    submitForm = (event) => {
        event.preventDefault()
        this.props.history.push('/');
    };
    
    handleLogin = (event) => {
        this.setState({ userName : event.target.value });
    };
    
    render() {
       
        return (
        <div>
            <h2>Welcome {this.state.userName}</h2>
            <form onSubmit={this.submitForm.bind(this)}>
                <span>NAME:</span>
    	        <input 
                    type="text" 
                    value={this.state.userName}
                    onChange={this.handleLogin}
                    placeholder="Enter Your Name" 
                    required 
                />
                <button type='submit'>Login</button>
    	    </form>
        
        </div>
    
        );
    }
}

export default withRouter(LoginPage);
