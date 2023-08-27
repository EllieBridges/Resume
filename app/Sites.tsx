import Image from 'next/image';
import Link from 'next/link';

const Sites = () => {

    const links: Record<string, string> = { github: 'https://github.com/EllieBridges', linkedin: 'https://www.linkedin.com/in/ellie-bridges-244b7582', instagram: 'https://www.instagram.com/wewentexploringig/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' };

    return (
        <section className='flex flex-col my-10 p-5 md:p-20'>
            <h2 className='font-primary text-4xl font-bold text-black mb-10 p-2'>Get to know me</h2>
            <ul className='flex flex-col mx-auto justify-evenly md:flex-row'>
                {Object.keys(links).map((key, id) => (
                    <li key={id} className='flex flex-col m-2 h-32 w-32 bg-green rounded-full items-center justify-center hover:bg-pink hover:border-solid hover:border-white md:w-48 md:h-48'>
                        <Link href={links[key]}><Image className='md:scale-150' src={`/${key}.png`} alt={`${links[key]} logo`} width={50} height={50} /></Link></li>
                ))}
            </ul>

        </section>
    )
}

export default Sites;