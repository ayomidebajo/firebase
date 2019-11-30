//dummy data(initial state created)
const initState = {
    projects: [
        {id: 1, title: 'help me find peach', content: 'something'},
        {id: 2, title: 'collect all the stars', content: 'another one'},
        {id: 3, title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}
//project reducer for each project
const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
            case 'CREATE_PROJECT_ERROR':
                console.log('create project error', action.err);
                return state;
            default: 
                return state;
                
            
    }
}

export default projectReducer;