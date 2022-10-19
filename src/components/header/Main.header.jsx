import React, { Component } from 'react'

//image
import Avt from "@/assets/avt.png";
import LogoC from "@/assets/RbLogoS.png";

//icons
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';



function Mainheader() {

  //hooks views
  const [showMenu, setShowMenu] = React.useState('hidden font-bold w-4/5 h-full p-8 gap-y-8 bg-gray-400 md:flex md:static  md:flex-row md:gap-4 md:mr-auto md:p0 md:h-auto');
  
  const handleShowMenu = () => {
    setShowMenu('absolute flex flex-col top-0 left-0 font-bold w-4/5 h-full p-8 gap-y-8 bg-white md:flex md:static  md:flex-row md:gap-4 md:mr-auto md:p0 md:h-auto ');
  };
  const handleCloseMenu = () => {
    setShowMenu('hidden font-bold w-4/5 h-full p-8 gap-y-8 bg-gray-400 md:flex md:static  md:flex-row md:gap-4 md:mr-auto md:p0 md:h-auto ');

  }

  return (
    <header className='flex container gap-8 items-center px-4'>
      {/* ocultar en desktop */}
      <button className='md:hidden ' onClick={handleShowMenu}><MenuIcon  /></button>
      {/* logo  empuja los elementos hacia la izquierda*/}
        <img src={LogoC} alt="Logo" className='h-8 mr-auto md:mr-0' />
      {/* flex-col mod cascada */}
        <nav  className={showMenu}>
          <button className='md:hidden mb-12' onClick={handleCloseMenu}><CloseIcon /></button>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        {/* flex= despliga en la misma linea y gap es para ver
          el espacio entre si
        */}
        <div className='flex gap-4'>
          <button><CartIcon /></button>
          <img src={Avt} alt="" className='w-6 h-6 ' />
        </div>
      </header>
  )
}

export default Mainheader