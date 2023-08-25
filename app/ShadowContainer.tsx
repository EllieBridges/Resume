'use client'

import type { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const ShadowContainer = ({ children }: { children: ReactNode }) => {

    return (
        <AnimateOnScroll >
            <section className='flex mx-auto items-center z-1 justify-center bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 w-5/6 md:w-3/4'
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation="[slide-right_1s_ease-in-out]">
                <div id='divTopper' className='bg-white flex flex-col justify-evenly items-center px-5 pb-10 pt-5 -mt-2 -ml-2 lg:flex-row lg:px-10'>
                    {children}
                </div>
            </section >
        </AnimateOnScroll>
    )
};

export default ShadowContainer;