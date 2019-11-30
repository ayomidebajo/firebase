//exporting signed in details of each user
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        
        //for authentication
          const firebase = getFirebase();

          //for checking the user's credentials
          firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
            //promises
            ).then(() => {
              dispatch({type: 'LOGIN_SUCCESS'})
          }).catch((err) => {
              dispatch({type: 'LOGIN_ERROR', err})
          });
      }  
}

//exporting signed out details of each user
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() =>{
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        })
    }
}

//exporting signup details of each user 
export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //for authentication
        const firebase = getFirebase();
        //for user collection after authentication
        const firestore = getFirestore();

        //for creating an account from firebase into the component
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
            //promises
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        //promises
        }).then(() => {
            dispatch ({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}

// Reset password with Firebase
export const resetPassword = (credentials) => {
    return (dispatch, getState, {getFirestore,getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        // const user = firebase.auth().currentUser()

        // if () {

        // } 
        firebase.auth().sendPasswordResetEmail(
            credentials.email
        ).then((resp) => {
            return firestore.collection('users').set({
                newPassword: credentials.password
            })
        }).then(() => {
            dispatch ({ type: 'RESET_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'RESET_ERROR', err})
        });
    }
}