
const Button = ({ id, innerHtml, type, handler, colour }: { id: string, innerHtml: string, type: string, handler: Function, colour: string }) => {
    return (
        <button onClick={() => handler(type)} className={`m-2 p-1 w-fit rounded-full bg-${colour} text-white hover:bg-green hover:text-white text-sm md:p-2 md:m-2 md:text-base lg:text-xl`} id={id}>{innerHtml}</button>
    )
}

export default Button;