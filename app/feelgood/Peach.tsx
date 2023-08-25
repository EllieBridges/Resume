import Image from "next/image";

const Peach = () => {
    return (
        <section className='flex flex-col justify-evenly items-center mx-auto mt-20'>
            <Image className='mx-auto mt-10 md:pt-20 animate-bounce' priority={true} src='/peach.png' alt='Emoji peach' width={200} height={200} />
        </section>
    )
}

export default Peach;