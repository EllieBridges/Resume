import Image from "next/image";

const Title = ()=> {
    return(
    <section className='flex flex-col justify-evenly items-center mx-auto mt-20'>
        <h1 className ='font-primary font-black text-5xl text-purple p-2 m-2 drop-shadow-md'>Positivity Peach</h1>
        <Image className ='mx-auto my-10 pt-20 animate-bounce' priority={true} src='/peach.png' alt='Emoji peach' width={200} height={200}/>
    </section>
    )
}

export default Title;