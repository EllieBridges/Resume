import Link from "next/link"
import BlockHighlight from "./BlockHighlight";

const Footer = () => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-pink via-green to-purple opacity-90 h-fit text-white p-3'>
            <h3 className='m-3 text-center italic font-black'>Find everything you&apos;re looking for?</h3>
            <div className='flex flex-row justify-evenly font-secondary mb-8 '>
                <Link href='/contact' className='hover:font-black'>Contact me</Link>
                <Link href='https://github.com/EllieBridges' className='hover:font-black'>GitHub</Link>
                <Link href='https://www.linkedin.com/in/ellie-bridges-244b7582' className='hover:font-black'>LinkedIn</Link>
                <Link href='https://www.instagram.com/wewentexploringig/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='hover:font-black'>Instagram</Link>
            </div>
        </div>
    )
}

export default Footer;