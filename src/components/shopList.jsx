import React, { useState } from 'react'
//version 2 by ytbr
const ShopList = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')


    const handleSubmit = e =>{
        e.preventDefault()
        if(!name || !quantity) return;


        const newItem = {
            name, 
            quantity : parseInt(quantity)
        }
        setItems((prevItems)=>[...prevItems,newItem ])
        setName('')
        setQuantity('')

    }



    
  return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Item Name' value={name} onChange={e=> setName(e.target.value)} />
            <input type='number' placeholder='Quantity' value={quantity} onChange={e=> setQuantity(e.target.value)} />
            <button type='submit'>Add Item</button>
            </form> 
            <ul>
                {items.map((item, index)=>(
                    <li key = {index}>
                        Name : {item.name} Quantity : {item.quantity}
                    </li>
                ))}
            </ul>


    </div>
  )
}

export default ShopList