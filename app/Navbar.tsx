import Link from 'next/link';

const Navbar = () => {
  return (
    <nav id='navbar' className='flex flex-row w-100 sticky inset-x-0 top-0 bg-gradient-to-r from-pink to-purple text-white p-2'>
      <div id='navHome' className='basis-1/5'>
      <Link href='/' className='text-green text-2xl font-black shadow-lg shadow-purple hover:text-white'>
        Home
        </Link>
        </div>
  <div id='separator' className='basis-0 lg:basis-1/5 xl:basis-2/5'></div>
      <div id='navSelection' className='basis-4/5 flex flex-row justify-right justify-evenly text-sm md:text-lg'>
        <Link href='gallery' className='basis-1/7 sm:pl-44 md:pl-72  hover:font-bold'>
          Gallery 
          </Link>
        <Link href='art' className='hover:font-bold'>
          Art
          </Link>
        <Link href='tictactoe' className='hover:font-bold whitespace-normal'>
          Tic Tac Toe
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

