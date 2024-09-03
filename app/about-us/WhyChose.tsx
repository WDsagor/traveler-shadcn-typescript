import { neswsDataType } from '@/lib/type';
import React from 'react';
import WhyChoseCard from './WhyChoseCard';
const whyChose: neswsDataType[] = [
    {
        imgUrl: "/icons/Group 105.svg",
        newsTitle: "Best price guarantee",
        publishDate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        imgUrl: "/icons/Group 105 (1).svg",
        newsTitle: "Easy Booking",
        publishDate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        imgUrl: "/icons/Group 105 (2).svg",
        newsTitle: "Customer Service 24/H",
        publishDate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
]

const WhyChose = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-3/4 py-10">
            {whyChose.map((news, i) => {
                return <WhyChoseCard news={news} key={i} />
            })}
        </div>
    );
};

export default WhyChose;