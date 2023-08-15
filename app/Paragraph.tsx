import AnimateOnScroll from "./AnimateOnScroll";

const Paragraph = ({id, title, content, colour}: {id: string, title: string, content: string, colour: string}) => {
    return(
        <AnimateOnScroll>
        <section id={id} className='flex items-center z-1 justify-center m-5 bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 w-3/4' data-te-animation="[slide-right_1s_ease-in-out]">
            <div id='divTopper' className='bg-white flex flex-col items-center px-5 pb-10 pt-5 -mt-2 -ml-2 lg:px-20'> 
            <h2 className={`font-primary text-2xl font-bold text-${colour} mb-2 p-2 sm:text-5xl`}>{title}</h2>
            <h3 className={`font-secondary text-sm text-${colour} text-base text-justify p-2 sm:text-lg`}>{content}</h3>
            </div>
        </section>
        </AnimateOnScroll>
    )
}

export default Paragraph;