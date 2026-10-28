import React,{useContext} from 'react'
import { myContext } from './App'


const Cart = () => {

  let appState=useContext(myContext)

  
  return (
    <div>
      <h1>Welcome to Cart Page</h1> 
 
    <div>{appState.cart.length > 0 ? appState.cart.map((e)=>{
      return <div key={e.id}>
        <img src={e.image} alt="" />
        <h3>{e.title}</h3>
        <h2>Price : {e.price}</h2>
        <h3>Rating:{e.rating.rate}</h3>
        <button onClick={()=>{
               appState.dispatch({
                type:"remove",
                payload: e
               })
            }}>Remove</button>
      </div>
    }) :"No Product in Cart"}</div>
    </div>
  )
}

export default Cart
