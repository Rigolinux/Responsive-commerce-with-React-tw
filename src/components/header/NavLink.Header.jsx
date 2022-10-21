import React from 'react'

function NavLinkHeader({text}) {
    
  return (
    //group se utiliza para modificar elementos en conjunto
    <a href="#" className='relative text-quinary py-6 group' >
        <span className='group-hover:text-white mt-4'>{text}</span>
        <span className='absolute bottom-0 left-0 w-full h-1 group-hover:bg-white mt-8 scale-0 group-hover:scale-100 transition-all duration-500 '></span>
        </a>
  )
}

export default NavLinkHeader