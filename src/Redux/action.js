import * as types from "./actiontypes"
import axios from "axios"

export const getcarreq=()=>{
    return{type: types.GET_CAR_REQUEST}
}
export const getcarsucc=(payload)=>{
    return{type: types.GET_CAR_SUCCESS,payload}
}
export const getcarfail=()=>{
    return{type: types.GET_CAR_ERROR}
}

export const getallcarreq=()=>{
    return{type: types.GET_ALLCAR_REQUEST}
}
export const getallcarsucc=(payload)=>{
    return{type: types.GET_ALLCAR_SUCCESS,payload}
}
export const getallcarfail=()=>{
    return{type: types.GET_ALLCAR_ERROR}
}
export const getstatecityreq=()=>{
    return{type: types.GET_STATECITY_REQUEST}
}
export const getstatecitysucc=(payload)=>{
    return{type: types.GET_STATECITY_SUCCESS,payload}
}
export const getstatecityfail=()=>{
    return{type: types.GET_STATECITY_ERROR}
}

export const getcarDetails =(id) => async (dispatch) =>{

    dispatch(getcarreq())
    return await axios.get(`https://nice-gold-crocodile-hat.cyclic.app/cars/${id}`)
    .then((r)=>{
        dispatch(getcarsucc(r.data))
    })
    .catch((e)=>{
        dispatch(getcarfail())
    })
}

export const getallcarDetails= async (dispatch) =>{
    
    dispatch(getallcarreq())
    return await axios.get(`https://nice-gold-crocodile-hat.cyclic.app/cars`)
    .then((r)=>{
        dispatch(getallcarsucc(r.data))
    })
    .catch((e)=>{
        dispatch(getallcarfail())
    })
}

export const getstatecityDetails=(payload)=> async (dispatch) =>{
    
    dispatch(getstatecityreq())
    return await axios.get(`https://nice-gold-crocodile-hat.cyclic.app/cars/state?state=${payload.state}&city=${payload.city}`)
    .then((r)=>{
        dispatch(getstatecitysucc(r.data))
    })
    .catch((e)=>{
        dispatch(getstatecityfail())
    })
}
 