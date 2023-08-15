import Image from "next/image"

const PhotoGallery = () => {
    return(
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">

                <div className='flex w-1/2 flex-wrap'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/mountain.jpeg' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/deerjump.jpeg' />
                    </picture >
                    <picture  className='w-full p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/bridalveil.jpeg'/>
                    </picture >
                </div>

                <div className='flex w-1/2 flex-wrap'>
                    <picture  className='w-full p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/hummingbird.jpeg'/>
                    </picture >
                    <picture  className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/leaves.jpeg'/>
                    </picture >
                    <picture  className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/heron.jpeg' />
                    </picture >
                </div>

                <div className='flex w-1/2 flex-wrap'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/eagle.jpeg' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/water.jpeg' />
                    </picture>
                     <picture className='w-full p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/chipmunk.jpeg' />
                    </picture>
                </div>

                <div className='flex w-1/2 flex-wrap'>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/mountrobson.jpeg' />
                    </picture>
                    <picture className='w-1/2 p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/deer.jpeg' />
                    </picture>
                    <picture className='w-full p-1 md:p-2'>
                        <img
                        alt='gallery'
                        className='block h-full w-full rounded-lg object-cover object-center'
                        src='/butterflies.jpeg' />
                    </picture>
                </div>
                     
            </div>
        </div>

    )
}

export default PhotoGallery;