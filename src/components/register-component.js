import React, {Component} from 'react';

export default class Register extends Component{

    handleSubmit = e => {
        e.preventDefault();
        console.log('works!');
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up ;)</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"></input>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"></input>
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="E-mail"></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"></input>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"></input>
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
            </form>
        )
    }
}