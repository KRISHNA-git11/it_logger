import {GET_LOGS,LOGS_ERROR,SET_LOADING,DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS} from './types'

// Get Logs from server
export const getLogs = () => async dispatch =>{
    try {
        setLoading()
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type:GET_LOGS,
            payload:data
        })
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.statusText
        })
    }
}

//Add new log
export const addLogs = (log) => async dispatch =>{
    try {
        setLoading()
        const res = await fetch('/logs',{
            method:'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type:GET_LOGS,
            payload:data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.statusText
        })
    }
}

// Delete Log
export const deleteLog = (id) => async dispatch =>{
    try {
        setLoading()
        await fetch(`/logs/${id}`,{
            method:'DELETE',
        });
        dispatch({
            type:DELETE_LOG,
            payload:id
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.statusText
        })
    }
}

//Update log
export const updateLog = (log) => async dispatch =>{
    try {
        setLoading()
        const res = await fetch(`/logs/${log.id}`,{
            method:'PUT',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type:UPDATE_LOG,
            payload:data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.statusText
        })
    }
}
//Set current
export const setCurrent = (log) => {
    return {
        type:SET_CURRENT,
        payload:log
    }
}
//Clear current
export const clearCurrent = () => {
    return {
        type:CLEAR_CURRENT
    }
}

//Search Logs
export const searchLogs = (text) =>async dispatch => {
    try {
        setLoading()
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        dispatch({
            type:SEARCH_LOGS,
            payload:data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.statusText
        })
    }
}

//Set Loading
export const setLoading = () => {
    return {
        type:SET_LOADING
    }
}