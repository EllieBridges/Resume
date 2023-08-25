'use client'

import React from 'react';

const Page = () => {

    const handleClick = (hello: string) => {
        return console.log(hello);
    }

    return (
        <section className='bg-sprinkles bg-center w-screen h-fit flex flex-col p-5 m-auto opacity-80 md:p-20'>
            <h1 className='font-primary text-pink font-black text-5xl text-center mb-20'><span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green relative inline-block'><span className='relative text-white'>Contact me</span></span></h1>
            <iframe title="Embedded Wufoo Form"
                className='w-5/6 h-screen'
                sandbox="allow-popups-to-escape-sandbox allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin"
                src="https://ebridges.wufoo.com/embed/z1ad1oix0kzg0zf/">
            </iframe>
        </section>

    )
}

export default Page;