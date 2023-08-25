import BlockHighlight from "./BlockHighlight";
import ShadowContainer from "./ShadowContainer";

const Paragraph = ({ id, title, content, color }: { id: string, title: string, content: string, color: string }) => {
    return (
        <ShadowContainer >
            <div className='flex flex-col'>
                <BlockHighlight color={color}>
                    <h2 className={`font-primary text-2xl font-bold text-white mb-2 p-2 sm:text-5xl hover:spin`}>{title}</h2>
                </BlockHighlight>
                <h3 className={`font-secondary text-sm text-black text-base text-justify p-2 sm:text-lg`}>{content}</h3>
            </div>
        </ShadowContainer >
    )
}

export default Paragraph;