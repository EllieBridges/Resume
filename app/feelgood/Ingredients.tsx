export default function Ingredients({data}: {data: Array<string>}) {
    return(
        <div className ='font-secondary text-xl'>
            <ul>
            {data.map((ingredient, i)=> {
                return(
                    <li key={i}>{ingredient}</li>
                ) 
            })}
            </ul>
        </div>
    )
}