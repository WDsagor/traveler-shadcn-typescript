import React from 'react';
import DestinationCard from './DestinationCard';
import { cardDatatypes } from '@/lib/type';

const cardData: cardDatatypes[] = [
    {
        place: "Taman Nasional Komodo",
        img: "/images/card-1.png",
        price: 2499,
        days: 5

    },
    {
        place: "Taman Nasional Bunaken",
        img: "/images/card-2.png",
        price: 4499,
        days: 9

    },
    {
        place: "Raja Ampat, Papua Barat",
        img: "/images/card-3.png",
        price: 6499,
        days: 14

    },
    {
        place: "Kepulauan Wakatobi",
        img: "/images/card-4.png",
        price: 5199,
        days: 12

    },
    {
        place: "Gili Trawangan, Lombok",
        img: "/images/card-5.png",
        price: 4199,
        days: 7

    },
    {
        place: "Taman Nasional Bromo",
        img: "/images/card-6.png",
        price: 5199,
        days: 7

    },




]

const TopDestination = () => {
    return (
        <div className=' max-w-screen-2xl px-2 py-10 mx-auto'>
            <h2 className='text-primary font-bold text-2xl mt-5 text-center'>Top destination</h2>
            <h1 className=' py-4 text-5xl font-bold text-center '>Discover your love</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12'>
                {
                    cardData.map((card) =>
                        <DestinationCard key={card?.place} card={card} />
                    )
                }
            </div>
        </div>
    );
};

export default TopDestination;