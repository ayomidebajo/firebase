import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//creating each project
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    //handler for each change in the input
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    //handler for each project
    handleSubmit = (e) => {
       e.preventDefault();
    //    console.log(this.state);
        this.props.CreateProject(this.state);
        this.props.history.push('/'); 
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
              <form onSubmit={this.handleSubmit} className="white">
                 <h5 className="grey-text text-darken-3">Create new project</h5>
                 <div className="input-field">
                     <label htmlFor="title">Title</label>
                     <input type="text" id="title" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <label htmlFor="content">Project Content</label>
                    <textarea  id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                 </div>
                 <div className="input-field">
                     <button className="btn purple lighten-1 z-depth-0">Create</button>
                 </div>
                </form>  
            </div>
        )
    }
}

//connecting an object with data from redux
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

//dispatching objects with data into redux
const mapDispatchToProps = (dispatch) => {
    return {
        CreateProject: (project) => dispatch(createProject(project))
    }
}

//exporting and adding HOCs into the components
export default connect(mapStateToProps , mapDispatchToProps)(CreateProject);
