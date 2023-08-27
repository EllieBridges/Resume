import PhotoGallery from "./PhotoGallery";
import Header from "../Header";
import BlockHighlight from "../BlockHighlight";

const Page = () => {
  return (
    <div id='background' className='bg-white bg-center flex flex-col items-center'>
      <Header
        text='Gallery' />

      <h1 className='font-primary text-3xl text-white font-black text-center p-2 sm:text-5xl mt-5'><BlockHighlight color='green'>Art</BlockHighlight></h1>
      <div className='m-3 z-1 align-middle w-5/6 bg-gradient-to-r from-pink via-green to-purple shadow-lg p-1 md:w-3/4 mx-auto md:mt-20 md:p-1'>
        <p className='bg-white px-5 pb-10 pt-5 -mt-2 -ml-2 font-secondary text-sm text-${colour} text-base text-justify sm:text-lg lg:flex-row lg:px-20'>Art and design has played a big part of my life. Whilst I love the technical, logical side of my past work experience, I want to create a career where I&apos;m able to work creatively to solve problems, whilst exploring new designs and concepts.</p>
      </div>
      <PhotoGallery />
    </div>
  )
}

export default Page;
