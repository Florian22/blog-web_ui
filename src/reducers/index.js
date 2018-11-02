let defaultState = {};

//const mainReducer = (state = defaultState, action ) => {
export default (state = defaultState, action ) => {
    //redefine newState if it's not working
    let newState;
switch(action.type){
        case "LOAD_ARTICLES": return {
            ...state,
            articles : action.payload,
        };
        case "UNLOAD_ARTICLES": 
            if(state.articles){
                newState = {...state};
                delete newState.articles;
                return newState;
            }else{ return {...state}}
        case "LOAD_ARTICLE":  return {
            ...state,
            article : action.payload,
        };
        case "UPDATE_ARTICLE":  return {
            ...state,
        }; 
        case "DELETE_ARTICLE":  return {
            ...state,
        }; 
        case "CREATE_ARTICLE":  return {
            ...state,
        }; 
        case "UNLOAD_ARTICLE": 
        if(state.article){
            newState = {...state};
            delete newState.article;
            return newState;
        }else{ return {...state}}
        case "SIGN_IN":  return {
            ...state,
            currentuser: {
                _id: action.payload._id,
                username: action.payload.userName,
                email: action.payload.email,
                token: action.payload.token,
            }
        };
        case "SIGN_OUT": 
            if(state.currentuser){
                newState = {...state};
                delete newState.currentuser;
                return newState;
            }else{ return {...state}}
        default:return {...state};
    }

}

//export default mainReducer;