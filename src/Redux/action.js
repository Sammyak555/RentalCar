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

export const getcarDetails= async (dispatch) =>{

    dispatch(getcarreq())
    return await axios.get(`https://tame-newt-garment.cyclic.app/cars/641d5b0af383b010e8296e5d`)
    .then((r)=>{
        dispatch(getcarsucc(r.data))
    })
    .catch((e)=>{
        dispatch(getcarfail())
    })
}

export const getallcarDetails= async (dispatch) =>{

    dispatch(getallcarreq())
    return await axios.get(`https://tame-newt-garment.cyclic.app/cars/`)
    .then((r)=>{
        dispatch(getallcarsucc(r.data))
    })
    .catch((e)=>{
        dispatch(getallcarfail())
    })
}