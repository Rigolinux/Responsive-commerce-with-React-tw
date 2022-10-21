import React from 'react'

//components 
import DetailsProducts from '@/components/products/Details.Products.jsx'
import SlideProducts from './SlideProducts'

function MainProducts() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <SlideProducts />
        <DetailsProducts />
      </main>
  )
}

export default MainProducts