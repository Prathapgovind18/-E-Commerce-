import React,{useReducer, useState} from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Nav from './Nav'


//* indix used for default child component.
let myRouter=createBrowserRouter([
  {
    path:"/",
    element: <Nav></Nav>,
    children:[
      {
        index:true,
        element:<Home></Home>
      }
    ]
  },
  {
    path:"cart",
    element:<Cart></Cart>
  },
  
])

import { createContext } from 'react'


function Reducer(state,action){
  switch(action.type){
    case "all" :
      return {...state,allProduct:action.payload,loading:false}
    case "cart" :
        return{...state,cart:[...state.cart,action.payload]}
    case "remove" :
        return{...state,cart:state.cart.filter(e => e !== action.payload)}
  }
}


export let myContext=createContext()

const App = () => {

  let [state,dispatch]=useReducer(Reducer,
    {
      allProduct:[],
      oneProduct:[],
      cart:[],
      loading:true,
      error:false   
    
})

  return (
    <div>
      <myContext.Provider value={{...state,dispatch}}>

      <RouterProvider router={myRouter}>
      </RouterProvider>

      </myContext.Provider>

    </div>
  )
}

export default App
