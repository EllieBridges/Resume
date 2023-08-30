//Need to work on reducing the file side to improve load times - jpeg or webp? - to decide

import Image from "next/image";
import walt from '../../public/walt.png'
import pony from '../../public/pony.png'
import crow from '../../public/crow.png'
import elf from '../../public/elf.png'
import whale from '../../public/whale.png'
import owl from '../../public/owl.png'
import dog from '../../public/dog.png'
import bouquet from '../../public/bouquet.png'
import gannet from '../../public/gannet.png'
import monster from '../../public/monster.png'
import fish from '../../public/fish.png'
import antelope from '../../public/antelope.png'



const PhotoGallery = () => {
    return (
        <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mb-40'>

            <div className='flex flex-wrap flex-col md:flex-row md:-m-2'>

                <div className='flex flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of Walter White with a diamond earring'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={walt}
                            placeholder='blur' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of a dappled pony woth a pink background'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={pony}
                            placeholder='blur' />
                    </picture >
                    <picture className='w-full p-1 md:p-2'>
                        <Image
                            alt='A drawing of a crow holding a sink plug'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={crow}
                            placeholder='blur' />
                    </picture >
                </div>

                <div className='flex flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-full p-1 md:p-2'>
                        <Image
                            alt='A drawing of a disappointed elf'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={elf}
                            placeholder='blur' />
                    </picture >
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of the underside of a whale'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={whale}
                            placeholder='blur' />
                    </picture >
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of a barn owl in front of the sun'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={owl}
                            placeholder='blur' />
                    </picture >
                </div>

                <div className='flex flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of a cocker spaniel'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={dog}
                            placeholder='blur' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of a dried flower bouquet'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={bouquet}
                            placeholder='blur' />
                    </picture>
                    <picture className='w-full p-1 md:p-2'>
                        <Image
                            alt='A drawing of a pair of gannets courting'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={gannet}
                            placeholder='blur' />
                    </picture>
                </div>

                <div className='flex flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of a monster with horns in front of a swirling background'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={monster}
                            placeholder='blur' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <Image
                            alt='A drawing of a koi fish swimming from above'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={fish}
                            placeholder='blur' />
                    </picture>
                    <picture className='w-full p-1 md:p-2'>
                        <Image
                            alt='A drawing of a party antelope covered in silly string and streamers'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-125 md:hover-110'
                            src={antelope}
                            placeholder='blur' />
                    </picture>
                </div>

            </div>
        </div>

    )
}

export default PhotoGallery;