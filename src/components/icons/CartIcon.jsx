
import React from 'react'

import { AiOutlineShoppingCart } from "react-icons/ai";

function CartIcon(props) {
  return (
    <AiOutlineShoppingCart 
    className='text-quinary'
    {...props}
    />
  )
}

export default CartIcon