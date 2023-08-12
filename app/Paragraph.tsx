const Paragraph = ({id, title, content, colour}: {id: string, title: string, content: string, colour: string}) => {
    return(
        <section id={id} className={`flex flex-col justify-center w-auto m-auto my-0 md:w-4/5 p-10 pb-0 md:p-20 md:my-10`}>
            <h2 className={`font-primary text-4xl font-bold text-${colour} mb-2`}>{title}</h2>
            <h3 className={`font-secondary text-${colour} text-base md:text-lg text-justify`}>{content}</h3>
        </section>
    )
}

export default Paragraph;