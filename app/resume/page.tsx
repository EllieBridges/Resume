import Header from '../Header';
import WorkCard from './WorkCard';
import ShadowContainer from '../ShadowContainer';

type PlacementDetails = {
    company: string,
    role: string,
    duration: string,
    points: string[]
}

const cVData: PlacementDetails[] = [
    {
        company: 'Balfour Beatty (National Grid)', role: 'GIS Specialist (contract)', duration: 'May 22 - Nov 22', points: ['Lead GIS Specialist - Spearheaded GIS efforts enabling transmission of renewable energy from offshore wind farms. Directed complex design processes, taking data from targeted consultations to formulate general arrangement layouts and work plans',
            'Collaborated closely with engineers, land agents, and project managers to generate technical maps using the ESRI suite, aligning with legal requisites of the Planning Inspectorate for National Infrastructure proposals',
            'Efficient Data Management - Played a pivotal role in maintaining multiple design options throughout the evolution of the project. Established and managed ArcGIS Online maps tailored to engineering specification',
        ]
    },
    {
        company: 'Babergh Mid Suffolk District Council', role: 'GIS Officer', duration: 'July 17 - May 22', points: ['Strategic GIS Leadership and Data Management- led GIS efforts in the Strategic Planning and Infrastructure department, maintaining and creating high-quality data. Created maps for key documents including the Joint Local Plan and Infrastructure Delivery Plan',
            'Effective Data Analysis and Collaboration- Oversaw site visits to monitor housing development across districts.',
            'Optimized Processes and Enhanced Accessibility - implemented improvements to local GIS processes, enhancing efficiency, usability, and accessibility, establishing dynamic links with databases for comprehensive data understanding',
            'Roles in the Information Unit and Strategic Policy and Infrastructure Team',
        ]
    },
    {
        company: 'Essex County Fire and Rescue Service', role: 'GIS Officer (contract)', duration: 'Oct 19 - Dec 19', points: ['Handled and analyzed sensitive information on incidents, and used ONS data to identify trends and risk. Received advanced GIS training',
            'Helped analyze data pathways and increasing the ability of updated and live information to  devices in the appliances and in the Control room',
            'Increased awareness of GIS throughout held training and organized GIS day for the service',
        ]
    },

]

const Page = () => {
    return (
        <div className='flex flex-col align-middle bg-sprinkles'>
            <Header
                text='Resume' />
            <div className=''>
                {cVData.map((placement, i) => {
                    return (<WorkCard
                        key={i}
                        company={placement.company}
                        role={placement.role}
                        duration={placement.duration}
                        points={placement.points}
                    />)
                })}
            </div >
        </div>
    )
}

export default Page;