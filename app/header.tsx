import Image from "next/image";

const imageUrl =
  "/hero.png";

const Header = ({ text }: { text: string }) => {
  return (
    <header
      className="w-full h-52 bg-[url('/hero.png')] bg-cover bg-center flex justify-end items-end">
      <h1 id='headerTitle' className='font-primary font-black text-white text-7xl hover:drop-shadow-md hover:drop-shadow-green leading-title'>{text}</h1>
    </header>
  );
};

export default Header;

