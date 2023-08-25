import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const Profile = ({ id, title, content, subtitle, colour, photoUrl, photoSize }: { id: string, title: string, content: string, subtitle: string, colour: string, photoUrl: string, photoSize: number }) => {
    return (
        <AnimateOnScroll>
            <section id={id} className='flex items-center z-1 justify-center m-5 bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 w-3/4'
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation="[slide-right_1s_ease-in-out]">
                <div id='divTopper' className='bg-white flex flex-col justify-evenly items-center px-5 pb-10 pt-5 -mt-2 -ml-2 lg:flex-row lg:px-20'>
                    <div className='container flex flex-col lg:w-1/2'>
                        <h2 className={`font-primary text-3xl text-${colour} font-black text-center p-2 sm:text-5xl`}>{title}</h2>
                        <div className='m-5'>
                            <h3 className={`font-secondary text-sm text-black text-base text-justify sm:text-lg`}>{subtitle}</h3>
                            <h3 className={`font-secondary text-sm text-black text-base text-justify sm:text-lg`}>{content}</h3>
                        </div>
                    </div>
                    <Image id='profilePic' className='object-top justify-center m-5' src={photoUrl} alt='A black and white photo of me' width={photoSize} height={photoSize} />
                </div>
            </section>
        </AnimateOnScroll>
    )
}

export default Profile;