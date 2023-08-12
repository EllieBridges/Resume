import Image from 'next/image';
import Header from './header';
import Profile from './Profile';
import Paragraph from './Paragraph';
import Sites from './Sites';



const Page = () => {
return(

    <div id='homeContainer' className='flex flex-col w-100 align-center justify-center'>
        <Header/>


        <Profile
        id = 'intro'
        title = 'Welcome'
        content = 'I&apos;m currently on a journey to becoming a front-end software engineer. Please have a look around, and let me know your thoughts.'
        colour='purple'
        photoUrl='/profilePic.png'
        photoSize = {300}
        />
        

        <hr className='border-2 border-green w-1/3 m-auto'></hr>

        <Paragraph 
        id = 'about'
        title = 'Why'
        content = 'I&apos;ve been in the technology field for over 5 years. Starting out as a Geographical Information Systems (GIS) Technician, I worked my way up to becoming a GIS Specialist in the Power Transmission sector. I love the industry so much, but wanted to find a way to combine the skills I&apos;ve gained through this experience with an opportunity for creativity and self-development.'
        colour = 'pink'/>
        
        <Image className='m-auto'src='/globe.png' alt='globe illustration' width={400} height={400}/>
        

        <hr className='border-2 border-green w-1/3 m-auto'></hr>

        <Sites />

    </div>
)
}

export default Page;