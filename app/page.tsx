import Image from 'next/image';
import Header from './header';


const Page = () => {
return(

    <div id='homeContainer' className=' flex flex-col w-100 align-center justify-center '>
        <Header/>

        <section className='intro'>
            <Image id='profilePic' className='object-top justify-center' src='/profilePic.png' alt='A black and white photo of me' width='250' height='250'/>
            <span className="box-decoration-clone bg-gradient-to-r from-green to-pink text-white text-9xl px-2 ...">Hi<br />I&apos;m Ellie</span>
        </section>

        <section id='about' className='bg-green'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque nesciunt eaque. Fuga, rerum, commodi quae est laudantium laboriosam dolores accusamus aspernatur dolore culpa, praesentium eos. Iste cum atque aut?</h2>

        </section>
        <section id='interests' className='bg-purple'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, velit aspernatur. Iste modi unde eligendi cupiditate dolor molestiae repudiandae quas perspiciatis dolore optio, reprehenderit doloribus aliquid? Consequuntur quae excepturi at.</h2>

        </section>

    </div>
)
}

export default Page;