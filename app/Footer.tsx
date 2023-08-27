'use client'

import Link from "next/link"

const Footer = () => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-pink via-green to-purple opacity-90 h-fit text-white py-5 justify-center'>
            <h3 className='text-sm text-center italic font-black md:text-md'>Find everything you&apos;re looking for?</h3>
            <hr className='border-solid w-2/3 mx-auto my-2' />
            <div className='flex flex-wrap justify-center font-secondary md:justify-evenly'>
                <Link href='/contact' className='mx-3 hover:font-black '>Contact me</Link>
                <Link href='https://github.com/EllieBridges' className='mx-3 hover:font-black'>GitHub</Link>
                <Link href='https://www.linkedin.com/in/ellie-bridges-244b7582' className='mx-3 hover:font-black'>LinkedIn</Link>
                <Link href='https://www.instagram.com/wewentexploringig/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='mx-3 hover:font-black'>Instagram</Link>
            </div>
        </div >
    )
}

export default Footer;