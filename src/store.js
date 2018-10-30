import {createStore , combineReducers , applyMiddleware } from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import navReducer from "./reducer/navReducer"
import axios from 'axios'
import {userReducer} from './reducer/userReducer'
import aboutMe from'./reducer/aboutMe'

const reducers = combineReducers({
    navReducer : navReducer,
    userReducer: userReducer,
    aboutMe: aboutMe
})
const store = createStore(reducers,

    applyMiddleware(thunk,logger)

);
store.dispatch(dispatch=>{
    /*ASYNC CATALOGUE*/
    dispatch({type:'FETCH_IMAGE_CATALOGUE'})
    axios.get('https://res.cloudinary.com/monchan/image/list/catalogue.json')
        .then(resp=>{
            dispatch({type:'RECEIVED_CATALOGUE', payload : resp.data.resources})
        }).catch((err)=>{
            dispatch({type: 'FECTCH_CATALOGUE_ERROR',payload: err})
    })

    /*ASYNC PROMOTION*/
    dispatch({type:'FETCH_IMAGE_PROMOTION'})
        axios.get('https://res.cloudinary.com/monchan/image/list/promo.json')
        .then(resp=>{
            dispatch({type:'RECEIVED_PROMOTION', payload : resp.data.resources})
        }).catch((err)=>{
        dispatch({type: 'FECTCH_PROMOTION_ERROR',payload: err})
    })
    /*ASYNC MAGAZINE*/
    dispatch({type:'FETCH_IMAGE_MAGAZINE'})
    axios.get('https://res.cloudinary.com/monchan/image/list/mag.json')
        .then(resp=>{
            dispatch({type:'RECEIVED_MAGAZINE', payload : resp.data.resources})
        }).catch(err=>{
        dispatch({type: 'FECTCH_MAGAZINE_ERROR',payload: err})
    })
})

export default store