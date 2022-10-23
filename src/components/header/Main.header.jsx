import React, { Component } from 'react'

//image
import Avt from "@/assets/avt.png";
import LogoC from "@/assets/Logo-blue.png";

//icons
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';

//components
import NavLinkHeader from '@/components/header/NavLink.Header';



function Mainheader() {

  //hooks views
  const [showMenu, setShowMenu] = React.useState('hidden font-bold w-4/5 h-full  gap-y-8  md:flex md:static  md:flex-row md:gap-4 md:mr-auto z-10');
  const [textColor, setTextColor] = React.useState('relative text-quinary py-6 group');

  const handleShowMenu = () => {
    setShowMenu('absolute flex flex-col h-full pl-6 pt-2 top-0 left-0  font-bold w-4/5 h-full gap-y-8  md:flex md:static  md:flex-row md:gap-4 md:mr-auto  bg-primary z-10' );
  };
  const handleCloseMenu = () => {
    setShowMenu('hidden font-bold w-4/5 h-full gap-y-8  md:flex md:static  md:flex-row md:gap-4 md:mr-auto md:p0 md:h-auto md:grow ');

  }

  return (
    <>
    <div className='bg-primary'>
    <header className='flex grow container  p-4 md:p-0 gap-8 items-center px-4 bg-primary z-10 '>
      {/* ocultar en desktop */}
      <button className='md:hidden ' onClick={handleShowMenu}><MenuIcon  /></button>
      {/* logo  empuja los elementos hacia la izquierda*/}
        <img src={LogoC} alt="Logo" className='h-8 mr-auto md:mr-0 md:ml-3' />
      {/* flex-col mod cascada */}
        <nav  className={showMenu}>
          <button className='md:hidden ' onClick={handleCloseMenu}><CloseIcon /></button>
          <NavLinkHeader colortxt={textColor} text="Collections" />
          <NavLinkHeader colortxt={textColor} text="Men" />
          <NavLinkHeader colortxt={textColor} text="Woman"/>
          <NavLinkHeader colortxt={textColor} text="About"/>
          <NavLinkHeader colortxt={textColor} text="Contact"/>
        </nav>
        {/* flex= despliga en la misma linea y gap es para ver
          el espacio entre si
        */}
        <div className='flex gap-4 md:mr-3'>
          <button><CartIcon  className='text-quinary' /></button>
          <img src={Avt} alt="" className='w-6 h-6 ' />
        </div>
        
      </header>
      
      <span className='bg-quinary h-[1.5px] md:block ' />
      </div>
      </>
  )
}

export default Mainheader