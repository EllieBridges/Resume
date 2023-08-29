import Link from 'next/link';
import { useState, useEffect } from 'react';

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
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            </div>
            {!toggle && <div className='mobile-menu self-end mt-10 -mr-2 absolute w-fit bg-purple bg-opacity-60 text-black text-2xl md:hidden'>
                <ul className='text-black w-fit'>
                    <li><Link href='/gallery' className='block text-md px-5 py-4 hover:bg-green transition duration-300' onClick={clickHandler}>Gallery</Link></li>
                    <li><Link href='/feelgood' className='block text-md px-5 py-4 hover:bg-green transition duration-300' onClick={clickHandler}>Feel Good</Link></li>
                    <li><Link href='/resume' className='block text-md px-5 py-4 hover:bg-green transition duration-300' onClick={clickHandler}>Resume</Link></li>
                    <li><Link href='/contact' className='block text-md px-5 py-4 hover:bg-green transition duration-300' onClick={clickHandler}>Contact</Link></li>
                </ul>
            </div>}
        </div>
    )
}

export default HamburgerButton;