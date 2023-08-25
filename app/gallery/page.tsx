import PhotoGallery from "./PhotoGallery";
import Header from "../Header";

const Page = () => {
  return (
    <div id='background' className='bg-white bg-center pb-48 flex flex-col items-center'>
      <Header
        text='Art' />
      <div className='m-3 z-1 align-middle w-5/6 bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 md:w-3/4 mx-auto md:mt-20 md:p-1'>
        <p className='bg-white px-5 pb-10 pt-5 -mt-2 -ml-2 font-secondary text-sm text-${colour} text-base text-justify sm:text-lg lg:flex-row lg:px-20'>Art and design have also played a big part of my life. Whilst I love the technical, logical side of my past work experience, I wanted to create a career going forward that I&apos;m able to work creatively to solve problems and explore new visuals and concepts.</p>
      </div>
      <PhotoGallery />
    </div>
  )
}

export default Page;
