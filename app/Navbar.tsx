import Link from 'next/link';
import React from 'react';
import HamburgerButton from './HamburgerButton';


const Navbar = () => {



  return (
    <nav id='navbar' className='flex flex-row  w-100 sticky inset-x-0 top-0 bg-gradient-to-r from-pink to-purple text-white p-2 z-10'>
      <div id='navHome' className='basis-2/6'>
        <Link href='/' className='text-green text-2xl font-black hover:text-white'>
          Home
        </Link>
      </div>

      <div id='separator' className='basis-1/2 md:basis-2/6'></div>


      <div id='navSelection' className='hidden flex-row navbar-burger basis-3/6 align-middle justify-right justify-between md:flex ml-10 text-sm md:mr-5 md:text-lg lg:basis-2/6'>
        <Link href='/gallery' className='hover:font-bold '>
          Gallery
        </Link>
        <Link href='/feelgood' className='hover:font-bold whitespace-normal'>
          Feel good
        </Link>
        <Link href='/resume' className='hover:font-bold'>
          Resume
        </Link>
        <Link href='/contact' className='hover:font-bold'>
          Contact
        </Link>
      </div>

      <HamburgerButton />


    </nav>
  )
}

export default Navbar;

