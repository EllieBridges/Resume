import Image from 'next/image';
import Link from 'next/link';

const Sites = () => {

    const links: Record<string, string> = {github: 'https://github.com/EllieBridges', linkedin:'https://www.linkedin.com/in/ellie-bridges-244b7582', instagram: 'https://www.instagram.com/wewentexploringig/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'};

    return (
        <section className='flex flex-col my-10 p-20'>
            <h2 className='font-primary text-4xl font-bold text-green mb-10 p-2'>Get to know me</h2>
             <ul className='flex flex-row justify-evenly'>
            {Object.keys(links).map((key, id) => (
                <li key={id} className='flex flex-col w-48 h-48 bg-green rounded-full items-center justify-center hover:grow'>
                    <Link href={links[key]}><Image src={`/${key}.png`} alt={`${links[key]} logo`} width={100} height={100}/></Link></li>
            ))}
            </ul>
    
        </section>
    )
}

export default Sites;