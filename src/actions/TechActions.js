import {GET_TECHS,ADD_TECH,DELETE_TECH,TECHS_ERROR,SET_LOADING} from "./types"

//Get techs
export const getTechs = () => async dispatch =>{
    try {
        setLoading()
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type:GET_TECHS,
            payload:data
        })
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload:'error'
        })
    }
}
//Add Techs
export const addTech = (tech) => async dispatch =>{
    try {
        setLoading()
        await fetch('/techs',{
            method:'POST',
            body:JSON.stringify(tech),
            headers:{
                'Content-Type':'application/json'
            }
        });
        dispatch({
            type:ADD_TECH,
            payload:tech
        })
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload:'error'
        })
    }
}
//Delete Tech
export const deleteTech = (id) => async dispatch =>{
    try {
        setLoading()
        await fetch(`/techs/${id}`,{
            method:'DELETE'
        });
        dispatch({
            type:DELETE_TECH,
            payload:id
        })
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload:'error'
        })
    }
}

//Set loading
export const setLoading = () => {
    return {
        type:SET_LOADING
    }
}