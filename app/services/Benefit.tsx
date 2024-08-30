import React from 'react';
import BenefitCard from './BenefitCard';
import { benefitsType } from '@/lib/type';


const benefits: benefitsType[] = [
    {
        imgUrl: "/icons/fa-solid_hiking.png",
        title: "Hiking",
        description: "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",

    },

    {
        imgUrl: "/icons/icon-park-outline_rollerskates.png",
        title: "Staking",
        description: "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",

    },
    {
        imgUrl: "/icons/map_climbing.png",
        title: "Climbing",
        description: "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",

    },
    {
        imgUrl: "/icons/simple-icons_yourtraveldottv.png",
        title: "Tours",
        description: "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",

    },
    {
        imgUrl: "/icons/fluent-emoji-high-contrast_diving-mask.png",
        title: "Diving",
        description: "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",

    },
    {
        imgUrl: "/icons/fa-brands_fly.png",
        title: "Flying",
        description: "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",

    },
]

const Benefit = () => {
    return (
        <section className='max-w-screen-2xl mx-auto px-3 py-16'>
            <div className='text-center mx-auto  pb-5'> <p className='uppercase '>Benefits</p>
                <h1 className='text-4xl uppercase font-bold'>OUR SERVICE</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {benefits.map((benefit, i) => {
                    return <BenefitCard key={i} benefit={benefit} />
                })}
            </div>
        </section>
    );
};

export default Benefit;