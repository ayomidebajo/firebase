import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

export class PasswordReset extends Component {
    state = {
        email: '',
        oldPassword: '',
        newPassword: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);  
        this.props.resetPassword(this.state);
    }
    render() {
        const {authError, auth} = this.props;
        // if (action.type === 'RESET_SUCCESS') return <Redirect to='/signin'/>;

        return (
               <div className="container">
              <form onSubmit={this.handleSubmit} className="white">
                 <h5 className="grey-text text-darken-3">Reset Password</h5>
                 <div className="input-field">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <label htmlFor="password">Old Password</label>
                     <input type="password" id="oldPassword" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <label htmlFor="password">New Password</label>
                     <input type="password" id="newPassword" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <button className="btn purple lighten-1 z-depth-0">Reset Password</button>
                <div className="red-text center">
                     { authError ? <p>{authError}</p> : null }
                </div>
                 </div>
                </form>  
            </div>
        )
    }
}

//connecting an object with data from redux
const mapStateToProps = (state) => {
    // console.log(this.state);
    
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
        
    }
}

//dispatching an object with data into redux
const mapDispatchToProps = (dispatch) => {
    return {
        resetPassword: (creds) => dispatch(resetPassword(creds)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PasswordReset)

