import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

//the dashboard(what is rendered)
class Dashboard extends Component {
    render() {
        console.log(this.props);
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                        </div>
                        <div className="col s12 m5 offset-m1">
                        <Notifications /> 
                    </div>
                </div>
            </div>
        )
    }
}

//connecting an object with data from redux
const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth 
    }
}

//exporting and combining HOC in the components
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'} 
    ])
    )(Dashboard);
