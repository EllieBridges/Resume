
const Button = ({handler, ext, type, isQuote, id, innerHtml, colour}: {handler: Function, ext: string, type: string, isQuote: boolean, id: string, innerHtml: string, colour: string}) => {
    return( 
        <button onClick={()=>handler(ext, type, isQuote )} className ={`p-2 m-5 w-fit rounded outline outline-${colour} hover:bg-green hover:text-white`} id={id}>{innerHtml}</button>
    )
}

export default Button;