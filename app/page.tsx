'use client'

import Image from 'next/image';
import Header from './Header';
import Profile from './Profile';
import Paragraph from './Paragraph';
import Sites from './Sites';

const Page = () => {
    return (

        <div id='homeContainer' className='flex flex-col w-100 align-center justify-center'>
            <Header
                text='Front-end Developer'
            />

            <section id='background' className='bg-sprinkles bg-center bg-opacity-25'>

                <Profile
                    id='intro'
                    title='Welcome'
                    subtitle='Hi, I&apos;m Ellie.'
                    content='I&apos;m currently on a journey to becoming a front-end software developer. Please have a look around and let me know your thoughts.'
                    color='green'
                    photoUrl='profilepic.png'
                    photoSize={200}
                />

                <Paragraph
                    id='who'
                    title='Who'
                    content='I&apos;ve been in the technology field for over 5 years. Starting out as a Geographical Information Systems (GIS) Technician, I worked my way up to becoming a GIS Specialist in the Power Transmission sector. I love the industry so much, but want to find a way to combine the skills I&apos;ve gained through this experience with an new opportunity for growth and self-development.'
                    color='purple' />

                <Image className='m-auto p-10 hover:scale-150' src='globe.png' alt='globe illustration' width={400} height={400} />

                <Paragraph
                    id='why'
                    title='Why'
                    content='I want to achieve a career within which I can successfully combine my love for logic and creativity with an ever-changing industry. I&apos;m a visual learner, and although the road to get here hasn&apos;t been the most direct, there&apos;s nothing more satisfying than seeing ideas come to life. If I knew about front-end engineering earlier on, I would have definitely explored this route sooner. The chance to pursue new software and frameworks is excitingly endless.'
                    color='green' />

                <Paragraph
                    id='what'
                    title='What'
                    content='I have learnt Javascript, HTML, CSS and React. I have built most of my projects using Create React App, however also I have those (like this one) using Next.js, Typescript and Tailwind CSS. I try to push myself by learning new ways of problem solving, so I can evaluate for myself the pros and cons and the best application for each. I have created and connected to existing APIs and built basic databases using Docker, Postgres and SQL. My learning has been a combination of Udemy online courses, documentation and the support of my industry-experienced partner.'
                    color='purple' />

                <Sites />
            </section>

        </div>
    )
}

export default Page;