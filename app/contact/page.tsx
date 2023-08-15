import React from 'react';

const Page = () => {

    const clickHandler= () => {
        return('Hello')
    }

    return(
        <section className='bg-sprinkles bg-center w-screen h-screen'>
        <div id='contactForm' className='flex flex-col w-3/4 m-auto'>
            <h2 className='mt-20 '>Contact me</h2>
            <input id='name' type='text' className='form-input' placeholder='Name'></input>
            <input id='email' type='email' className='form-input' placeholder='Email address'></input>
            <input id='message' type='text' className='form-input' placeholder='Message'></input>
            <button id='formSubmit' type='submit' >Submit</button>
        </div>
        </section>
    )
}

export default Page;