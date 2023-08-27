const imageUrl =
  "/hero.png";

const Header = ({ text }: { text: string }) => {
  return (
    <header
      className=" flex w-full h-20 bg-[url('/hero.png')] bg-cover bg-center text-right justify-end items-end md:h-32 lg:h-48 ">
      <h1 id='headerTitle' className='font-primary text-4xl font-black text-white hover:drop-shadow-md hover:drop-shadow-green leading-title md:text-7xl md:-mb-3'>{text}</h1>
    </header>
  );
};

export default Header;

