import Image from "next/image";

const Profile = ({id, title, content, colour, photoUrl, photoSize}: {id: string, title: string, content: string, colour: string, photoUrl: string, photoSize: number}) => {
    return(
        <section id={id} className='flex flex-col md:flex-row justify-evenly p-10 md:p-20 mt-0 md:my-10 items-center'>
            <div className='container flex flex-col w:2/3 md:w-1/2 bg-white'>
                <h2 className={`font-primary text-${colour} font-black text-5xl text-center p-2`}>{title}</h2>
                <h3 className={`font-secondary text-${colour} text-base md:text-lg text-justify m-2 p-2`}>{content}</h3>
            </div>
            <Image id='profilePic' className='object-top justify-center' src={photoUrl} alt='A black and white photo of me' width={photoSize} height={photoSize}/>
        </section>
    )
}

export default Profile;