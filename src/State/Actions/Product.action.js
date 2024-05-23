
import React from "react"

 const product_action_add = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: data
        })
    }
}   
 const product_action_minus = (data) => {
    return (dispatch) => {
        dispatch({
            type: "MINUS",
            payload: data
        })
    }
}

export {
    product_action_add,
    product_action_minus
}