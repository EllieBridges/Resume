import Image from "next/image";

const imageUrl =
  "/hero.png";

const Header = () => {
  return (
    <header
    className="w-full h-96 bg-[url('/hero.png')] bg-cover bg-center flex justify-end items-end">
      <h1 id='headerTitle' className='font-primary font-black text-white text-7xl hover:drop-shadow-md hover:drop-shadow-green leading-title'>Front-end Developer</h1>
    </header>
  );
};

export default Header;

