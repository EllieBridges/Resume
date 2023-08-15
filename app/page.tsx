'use client'

import Image from 'next/image';
import Header from './header';
import Profile from './Profile';
import Paragraph from './Paragraph';
import Sites from './Sites';
import './style.css'


const Page = () => {
return(
   
    <div id='homeContainer' className='flex flex-col w-100 align-center justify-center'>
        <Header/>

        <section id='background' className='bg-sprinkles bg-center'>
            
        <Profile
        id = 'intro'
        title = 'Welcome'
        subtitle = 'Hi, I&apos;m Ellie.'
        content = 'I&apos;m currently on a journey to becoming a front-end software engineer. Please have a look around and let me know your thoughts.'
        colour='purple'
        photoUrl='/profilePic.png'
        photoSize = {300}
        />

    
        <Paragraph 
        id = 'who'
        title = 'Who'
        content = 'I&apos;ve been in the technology field for over 5 years. Starting out as a Geographical Information Systems (GIS) Technician, I worked my way up to becoming a GIS Specialist in the Power Transmission sector. I love the industry so much, but want to find a way to combine the skills I&apos;ve gained through this experience with an opportunity for growth and self-development.'
        colour = 'pink'/>
        
        <Image className='m-auto p-10 hover:scale-150' src='/globe.png' alt='globe illustration' width={400} height={400}/>

        <Paragraph 
        id = 'why'
        title = 'Why'
        content = 'I want to achieve a career that I can successfully pair my love for logic, creativity and life long learning. I&apos;m a visual learner, and although the road to get here hasn&apos;t been the most direct, there&apos;s nothing more satisfying than seeing ideas come to life. If I knew about front-end engineering earlier on, I would have definitely explored this route sooner. As its an ever changing industry, the chance to pursue new software and frameworks is excitingly endless.'
        colour = 'purple'/>

        <Paragraph 
        id = 'what'
        title = 'What'
        content = 'I have learnt Javascript, HTML, CSS and React. I have built most of my projects using Create React App, however also I have those (like this one) using Next.js, Typescript and Tailwind CSS. I try to push myself by learning new ways of problem solving, so I can evaluate for myself the pros and cons of each method. I have created and connected to existing APIs and built basic databases using Docker, Postgres and SQL. My learning has been a combination of Udemy online courses, documentation and my very supportive partner.'
        colour ='pink'/>

        <Sites />
        </section>

    </div>
)
}

export default Page;