import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

//signed in links(when user is signed in)
const SignedInLinks = (props) => { 
    
    return (
       <ul className="right">
           <li><NavLink to ='/create'>New Project</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>
           <li><NavLink to ='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
       </ul>
    )
}

//dispatching objects with data into redux
const mapDispatchToProps = (dispatch) => {
return {
    signOut: () => dispatch(signOut())
}
}

//exporting with HOC
export default connect(null,mapDispatchToProps)(SignedInLinks);