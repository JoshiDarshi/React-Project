import React from 'react'

function Product({item}) {
    const {image,price,title,description,category
    } = item
    const nt = title.slice(0,15)
    const dt = description.slice(0,80)
    console.log(item)
  return (
    <div style={{width:'28%',margin:'20px',height:'500px'}}>
        <h1>{category
}</h1>
       <h1 style={{fontFamily:'fantasy',fontSize:'20px'}}>{nt}</h1>
       <img src={image} style={{height:'60%',width:'70%'}}/> 
       <h3>{price}</h3>
       <h6 style={{fontSize:'10px'}}>{dt}</h6>
        </div>
  )
}

export default Product