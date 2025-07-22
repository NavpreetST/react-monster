import React, { useState } from 'react'

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState({
        name: '',
        quantity: ''
    })
    const handleChange = e =>{
        const {list, quantity} = e.target
        newList((prevshoppingList)=>(

            {...prevshoppingList, [list]:value}
        )
        )
    }


  return (
    <div>
        <label>Item
            <input input='text' name='list' value = {shoppingList.name} onChange={handleChange}/></label>    
        <label>Quantity
            <input input = 'number' name='quantity' value = {shoppingList.quantity} onChange={handleChange}/>Age</label>    



    </div>
  )
}

export default ShoppingList