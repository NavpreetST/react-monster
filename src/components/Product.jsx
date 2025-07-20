
import React from 'react'


const Product = () => {
    const products = [
        {id: 1, name: "Rumble", price: "$1M"},
        {id: 2, name: "Ravage", price: "$1.2M"},
        {id: 3, name: "Laserbeak", price: "$1.9M"},]
    
  return (
    <div>
        {products.map((p)=>(
            <div key={p.id}>
                <h1>Name: {p.name}</h1>
                <h1>Price: {p.price}</h1>
            </div>
        ))}

    </div>
  )
}

export default Product