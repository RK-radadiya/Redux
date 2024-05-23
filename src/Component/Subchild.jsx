import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { product_action } from '../State/Actions'


const Subchild = () => {

    const product_state = useSelector(state => state.product)

    const dispatch = useDispatch()
    return (
        <div>
            <h1> {product_state.product_name}</h1>
            <h1> {product_state.product_price}</h1>
            <h1>App</h1>
            <button onClick={() => { dispatch(product_action.product_action_add(1000)) }}>INCRESE</button>
            <button onClick={() => { dispatch(product_action.product_action_minus(1000)) }}>DECRESE</button>
        </div>
    )
}

export default Subchild