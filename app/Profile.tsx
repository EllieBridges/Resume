import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import ShadowContainer from "./ShadowContainer";
import BlockHighlight from "./BlockHighlight";

const Profile = ({ id, title, content, subtitle, color, photoUrl, photoSize }: { id: string, title: string, content: string, subtitle: string, color: string, photoUrl: string, photoSize: number }) => {
    return (
        < ShadowContainer >
            <div key={id} className='container flex flex-col lg:w-1/2'>
                <h2 className={`font-primary text-3xl text-white font-black text-center p-2 sm:text-5xl`}>
                    <BlockHighlight
                        color={color}>{title}
                    </BlockHighlight>
                </h2>
                <div className='m-5'>
                    <h3 className={`font-secondary text-sm text-black text-base text-justify sm:text-lg`}>{subtitle}</h3>
                    <h3 className={`font-secondary text-sm text-black text-base text-justify sm:text-lg`}>{content}</h3>
                </div>
            </div>
            <Image id='profilePic' className='object-top justify-center m-5' src={photoUrl} alt='A black and white photo of me' width={photoSize} height={photoSize} />
        </ShadowContainer >
    )
}

export default Profile;