const QuoteBlock = ({quote}: {quote: string}) => {
    return (
        <div className = 'quoteContainer'>
            <h3 className = 'quote'>{quote}</h3>
        </div>
    )
}

export default QuoteBlock;