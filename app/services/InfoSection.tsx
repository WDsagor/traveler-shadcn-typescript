import { serviceInfo } from '@/lib/type';

import React from 'react';
import { ImPriceTags } from "react-icons/im";
import { TfiMapAlt } from "react-icons/tfi";
import { LiaCameraRetroSolid } from "react-icons/lia"
import { TbMapRoute } from "react-icons/tb";
import InfoCard from './InfoCard';


const infoData: serviceInfo[] = [{
    icon: <ImPriceTags />,
    title: "Get Best Price",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet ",
},
{
    icon: < TbMapRoute />,
    title: "All Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet ",
},
{
    icon: <TfiMapAlt />,
    title: " City Tours",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet ",
},
{
    icon: <LiaCameraRetroSolid />,
    title: "Photography",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet ",
},
]

const InfoSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 my-14 '>
            {infoData.map((info, i) => {
                return <InfoCard key={i} info={info} />
            })}
        </div>
    );
};

export default InfoSection;