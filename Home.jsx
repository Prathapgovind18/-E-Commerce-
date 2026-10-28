import React,{useContext,useEffect} from 'react'
import { myContext } from './App'
import "./Home.css"

const Home = () => {

    let appState=useContext(myContext)
    

  useEffect(()=>{
    async function abc(){
      let res=await fetch('https://fakestoreapi.com/products')
      let data=await res.json()
      console.log(data);
      appState.dispatch({
        type:"all",
        payload:data
      })
    
    }
    abc()

  },[])

   if(appState.loading){
        return <div>
          <h1>loading.....</h1>
        </div>
      }
  
  return (

    <div>
      <h1>Welcome to Home Page</h1>

      <section className='all'>
        {appState.allProduct.map((e,i)=>{
          return <div key={e.id}>
            <img src={e.image} alt="" />
            <h3>{e.title}</h3>
            <h3>Price: {e.price}</h3>
            <h3>Rating:{e.rating.rate}</h3>
            <button onClick={()=>{
               appState.dispatch({
                type:"cart",
                payload:  e
               })
            }}>Add to cart</button>

          </div>
        })}
      </section>

    </div> 
  )
}

export default Home
