import BlockHighlight from "../BlockHighlight";
import ShadowContainer from "../ShadowContainer";

const WorkCard = ({ company, role, duration, points }: { company: string, role: string, duration: string, points: string[] }) => {
    return (
        <ShadowContainer>
            <div className='flex flex-wrap justify-center'>

                <h1 className='w-full  font-primary font-black text-white md:text-2xl md:pr-2'><BlockHighlight color='pink'>{company}</BlockHighlight></h1>
                <h1 className='w-full italic text-purple  md:text-left md:text-xl'>{role}</h1>
                <h3 className='w-full font-secondary text-pink'>{duration}</h3>
                <ul className='font-secondary text-black'>
                    {points.map((point, i) => {
                        return (
                            <li key={i} className='list-disc text-xs sm:text-sm m-2 md:text-justify lg:text-lg'>{point}</li>
                        )
                    })}
                </ul>
            </div>
        </ShadowContainer>
    )
}

export default WorkCard;