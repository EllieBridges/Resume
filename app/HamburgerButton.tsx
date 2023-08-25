'use client'

import Link from 'next/link';
import { useState } from 'react';

const HamburgerButton = () => {
    const [toggle, setToggle] = useState('hidden');

    const clickHandler = () => {
        toggle ? setToggle('') : setToggle('hidden');
    }

    return (
        <div className='basis-3/6 md:hidden flex flex-col'>
            <div className='self-end'>
                <button className='outline-none mobile-menu-button self-end' onClick={clickHandler}>
                    <svg
                        className='w-6 h-6 text-white'
                        x-show='!showMenu'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            </div>
            {toggle && <div className='mobile-menu self-end mt-10 -mr-2 absolute w-fit bg-white bg-opacity-70 text-black text-2xl md:hidden'>
                <ul className=''>
                    <li><Link href='/gallery' className='block text-sm px-2 py-4 hover:bg-green transition duration-300'>Gallery</Link></li>
                    <li><Link href='/feelgood' className='block text-sm px-2 py-4 hover:bg-green transition duration-300'>Feel Good</Link></li>
                    <li><Link href='/resume' className='block text-sm px-2 py-4 hover:bg-green transition duration-300'>Resume</Link></li>
                    <li><Link href='/contact' className='block text-sm px-2 py-4 hover:bg-green transition duration-300'>Contact</Link></li>
                </ul>
            </div>}
        </div>
    )
}

export default HamburgerButton;