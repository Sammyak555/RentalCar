import * as types from "./actiontypes"

const initialState={
    carDetails:{},
    allcars:[],
    isLoading:false,
    isError:false
}

export const carReducer = ( state = initialState, action ) => {
    const { type, payload } = action
    switch(type){
        case types.GET_CAR_REQUEST:{
            return {...state,isLoading:true}
        }
        case types.GET_CAR_SUCCESS:{
            return {...state,isLoading:false,carDetails:payload}
        }
        case types.GET_CAR_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        case types.GET_ALLCAR_REQUEST:{
            return {...state,isLoading:true}
        }
        case types.GET_ALLCAR_SUCCESS:{
            return {...state,isLoading:false,allcars:payload}
        }
        case types.GET_ALLCAR_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        default : return state
    }
}