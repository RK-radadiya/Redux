import React from 'react'
import Child from './Component/Child'
import { useDispatch } from 'react-redux'
import { product_action } from './State/Actions'



function App() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>App</h1>
      <button onClick={() => { dispatch(product_action.product_action_add(1000)) }}>INCRESE</button>
      <button onClick={() => { dispatch(product_action.product_action_minus(1000)) }}>DECRESE</button>
      <Child></Child>
    </div>
  )
}

export default App