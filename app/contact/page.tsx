'use client'

import React from 'react';

const Page = () => {

    const handleClick = (hello: string) => {
        return console.log(hello);
    }
    return (
        <section className='bg-sprinkles bg-center w-screen flex flex-col p-5 m-auto opacity-80 h-fit justify-center md:p-20'>
            <h1 className='font-primary text-3xl text-white font-black text-center p-2 sm:text-5xl mt-5'><span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green relative inline-block'><span className='relative text-white'>Contact me</span></span></h1>
            <h1 className='font-secondary text-xs my-5 italic text-purple text-center'>*sorry for being ugly, but pretty things cost money and I am poor</h1>
            <iframe title="Embedded Wufoo Form"
                className='w-5/6 h-screen my-5'
                sandbox="allow-popups-to-escape-sandbox allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin"
                src="https://ebridges.wufoo.com/embed/z1ad1oix0kzg0zf/">
            </iframe>


        </section>
    )
}

export default Page;