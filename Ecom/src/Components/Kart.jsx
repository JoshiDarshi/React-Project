import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Product from './Product'

function Kart() {
    const [product,setproduct] = useState([])
    useEffect(() => 
    {
         fetch('https://fakestoreapi.com/products')
         .then((res)=>res.json())
         .then(data=>setproduct(data))
      },[])
    
  return (
    <div className='container m-auto text-center'>
    <h1 className='' style={{color:'#b4b4ff'}}>Kart API</h1>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {
        product.length === 0 ? <Loading/> :
        product.map((item,index)=>{
         return <Product key={index} item={item}/>
        })
        
    }
    </div>
    </div>
  )
}

export default Kart