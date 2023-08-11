import Image from "next/image";

const imageUrl =
  "/hero.png";

const Header = () => {
  return (
    <header
    className="w-full h-96 bg-[url('/hero.png')] bg-cover bg-center flex justify-center items-center">
      <h1 id='welcome' className='font-primary font-black text-white text-7xl ali'>Front-end Web Design</h1>
    </header>
  );
};

export default Header;

