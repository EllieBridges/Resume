import Link from 'next/link';

const Navbar = () => {
  return (
    <nav id='navbar' className='flex flex-row  w-100 sticky inset-x-0 top-0 bg-gradient-to-r from-pink to-purple text-white p-2 z-10'>
      <div id='navHome' className='basis-1/5'>
        <Link href='/' className='text-green text-2xl font-black hover:text-white'>
          Home
        </Link>
      </div>
      <div id='separator' className='basis-0/5 sm:basis-2/5 xl:basis-4/5'></div>
      <div id='navSelection' className='align-middle basis-4/5 flex flex-row justify-right justify-between ml-10 text-sm md:mr-5 md:text-lg sm:basis-2/5'>
        <Link href='gallery' className='hover:font-bold '>
          Gallery
        </Link>
        <Link href='feelgood' className='hover:font-bold whitespace-normal'>
          Feel good
        </Link>
        <Link href='contact' className='hover:font-bold'>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;

