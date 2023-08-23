const Ingredients = ({ recipe }: { recipe: string[] }) => {
    console.log(recipe)
    return (
        <div className='font-secondary text-sm md:text-base lg:text-2xl'>
            <ul>
                {recipe.map((ingredient, i) => {
                    return (
                        <li key={i}>{ingredient}</li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Ingredients;