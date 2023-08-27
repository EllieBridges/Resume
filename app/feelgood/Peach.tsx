import Image from "next/image";

const Peach = () => {
    return (
        <section className='flex flex-col justify-evenly items-center mx-auto mt-20'>
            <Image className='mx-auto animate-bounce lg:scale-125 md:pt-10' priority={true} src='/peach.png' alt='Emoji peach' width={170} height={170} />
        </section>
    )
}

export default Peach;