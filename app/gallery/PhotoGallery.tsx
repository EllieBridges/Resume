import Image from "next/image"

const PhotoGallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">

            <div className="flex flex-wrap flex-col md:flex-row md:-m-2">

                <div className='flex w-1/2 flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/walt.png' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/pony.png' />
                    </picture >
                    <picture className='w-full p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/crow.png' />
                    </picture >
                </div>

                <div className='flex w-1/2 flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-full p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/elf.png' />
                    </picture >
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/whale.png' />
                    </picture >
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/owl.png' />
                    </picture >
                </div>

                <div className='flex w-1/2 flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/dog.png' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/bouquet.png' />
                    </picture>
                    <picture className='w-full p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/gannet.png' />
                    </picture>
                </div>

                <div className='flex w-1/2 flex-wrap mx-auto w-full md:w-1/2'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/monster.png' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/fish.png' />
                    </picture>
                    <picture className='w-full p-1 md:p-2'>
                        <img
                            alt='gallery'
                            className='block h-full w-full rounded-lg object-cover object-center hover:scale-150'
                            src='/antelope.png' />
                    </picture>
                </div>

            </div>
        </div>

    )
}

export default PhotoGallery;