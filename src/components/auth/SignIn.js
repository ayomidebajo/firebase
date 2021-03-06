import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn} from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
//signing in
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    //watching every change in the input
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    //submitting every change from the input
    handleSubmit = (e) => {
       e.preventDefault();
       this.props.signIn(this.state);
        
    }
    render() {
        //redirecting
        const {authError,auth} = this.props;
        if (auth.uid) return <Redirect to='/'/>;
        
        return (
            <div className="container">
              <form onSubmit={this.handleSubmit} className="white">
                 <h5 className="grey-text text-darken-3">Sign In</h5>
                 <div className="input-field">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <label htmlFor="password">Password</label>
                     <input type="password" id="password" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <button className="btn purple lighten-1 z-depth-0">Login</button>
                <div className="red-text center">
                     { authError ? <p>{authError}</p> : null }
                </div>
                <div className="blue-text center">
                    <Link to='/reset'>Forgot password?</Link>
                </div>
                 </div>
                </form>  
            </div>
        )
    }
}

//connecting an object with data from redux
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

//dispatching an object with data into redux
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)) 
    }
}

//exporting and combining HOC in the components
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
