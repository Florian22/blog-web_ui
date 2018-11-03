import axios from 'axios';

const API_ROOT = 'https://apiblog.florianbonniec.com/api/v1';

//endpoint /post
export function loadArticles(){
    return (dispatch)=>{
        const URL = "/post";
        return axios.get(`${API_ROOT}${URL}`).then((response)=>{
            dispatch(loadArticles_event(response.data));
        });
    }
}

export function unloadArticles(){
    return (dispatch)=>{
            dispatch(unloadArticles_event());
    }
}

//endpoint /post
export function loadArticle(id){
    return (dispatch)=>{
        const URL = `/post/${id}`;
        return axios.get(`${API_ROOT}${URL}`).then((response)=>{
            dispatch(loadArticle_event(response.data));
        });
    }
}


export function onUnloadArticle(){
    return (dispatch)=>{
            dispatch(onUnloadArticle_event());
    }
}

export function updateArticle(id, payload){
    return (dispatch)=>{
        const URL = `/post/${id}`;
        return axios.patch(`${API_ROOT}${URL}`, payload.data, {
            headers: {
                'Authorization': `${payload.token}`,
            },        
        }).then((response)=>{
            dispatch(onUpdateArticle_event(response.data));
        });
    }
}

export function createArticle(payload){
    return (dispatch)=>{
        const URL = `/post/`;
        return axios.post(`${API_ROOT}${URL}`, payload.data, {
            headers: {
                'Authorization': `${payload.token}`,
            },        
        }).then((response)=>{
            dispatch(onCreateArticle_event(response.data));
        });
    }
}

export function deleteArticle(id, payload){
    return (dispatch)=>{
        const URL = `/post/${id}`;
        return axios.delete(`${API_ROOT}${URL}`,  {
            headers: {
                'Authorization': `${payload.token}`,
            },        
        }).then((response)=>{
            dispatch(onDeleteArticle_event(response.data));
        });
    }
}


function loadArticles_event(response){
    return {
    type: "LOAD_ARTICLES",
    payload: response,
    }
}

function unloadArticles_event(){
    return {
        type: "UNLOAD_ARTICLES",
    }
}

function loadArticle_event(response){
    return {
    type: "LOAD_ARTICLE",
    payload: response,
    }
}

function onUnloadArticle_event(){
    return {
        type: "UNLOAD_ARTICLE",
    }
}

function onUpdateArticle_event(response){
    return {
        type: "UPDATE_ARTICLE",
        payload: response,
    }
}

function onCreateArticle_event(response){
    return {
        type: "CREATE_ARTICLE",
        payload: response,
    }
}

function onDeleteArticle_event(response){
    return {
        type: "DELETE_ARTICLE",
        payload: response,
    }
}

// User auth

export function signIn(payload){
    return (dispatch)=>{
        const URL = `/users/login/`;
        return axios.post(`${API_ROOT}${URL}`, payload).then((response)=>{
            dispatch(signIn_event(response.data));
        });
    }
}

export function signOut(){
    return (dispatch)=>{
            dispatch(signOut_event());
    }
}

function signIn_event(response){
    return {
        type: "SIGN_IN",
        payload: response,
    }
}

function signOut_event(){
    return {
        type: "SIGN_OUT",
        payload: null,
    }
}

/*function onEmailChange_event(response){
    return {
        type: "EMAIL_CHANGE",
        payload: response,
    }
}
function onPasswordChange_event(response){
    return {
        type: "PASSWORD_CHANGE",
        payload: response,
    }
}*/