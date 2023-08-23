'use client'

import React from 'react';

const Page = () => {

    const handleClick= (hello : string) => {
        return console.log(hello);
    }

    return(
        <section className='bg-sprinkles bg-center w-screen h-screen flex flex-col p-20 m-auto'>
            <div id='formContainer' className='flex items-center z-1 justify-center m-5 bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 w-fit m-auto'>
            <div className='bg-white flex flex-col justify-evenly items-center  px-1 pb-10 pt-5 lg:px-20 w-max -mt-2 -ml-2'>
            <h2 className='m-auto my-10 font-primary font-black text-3xl text-purple p-3'>CONTACT ME</h2>
            <form id='contactForm' className='flex flex-col justify-evenly w-[400px] m-auto'>
            <input id='name' type='text' className='form-input required:border-red border-purple rounded-lg m-2 font-secondary' placeholder='Name'></input>
            <input id='email' type='email' className='form-input required:border-red border-purple rounded-lg m-2 font-secondary' placeholder='Email address'></input>
            <textarea id='message' className='form-input required:border-red border-purple rounded-lg m-2 font-secondary h-[300px]' placeholder='Message'></textarea>
            </form>
            <div className='relative flex-col justify-center m-auto my-10'>
            <div id='buttonShadow' className='bg-purple w-[83px] h-[56px] rounded-full -mb-16 ml-4'>
            </div>
            <button id='formSubmit' type='submit' className='rounded-full bg-pink p-4 w-fit m-auto text-white' onClick={handleClick('HI')} >Submit</button>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Page;