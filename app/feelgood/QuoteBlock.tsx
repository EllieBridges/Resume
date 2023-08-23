const QuoteBlock = ({ data }: { data: string }) => {
    return (
        <div id='quoteContainer' className=''>
            <h3 className='text-base m-4 md:text-2xl'>{data}</h3>
        </div>
    )
}

export default QuoteBlock;