
"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import { neswsDataType } from '@/lib/type';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import NewsCard from './NewsCard';

const newsCardData: neswsDataType[] = [
    {
        imgUrl: "/images/Rectangle 24.png",
        newsTitle: "where can i go? 5 amazing countries that are open right now",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (1).png",
        newsTitle: "beautiful view of indonesia's natural hills",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (2).png",
        newsTitle: "10 Indonesian Destinations you should visit in this year",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (3).png",
        newsTitle: "5 mountains that you must visit while in Indonesia",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (4).png",
        newsTitle: "the mo st interesting historical monuments in Indonesia",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (5).png",
        newsTitle: "travel booking before missing the discount",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (6).png",
        newsTitle: "10 Indonesian Destinations you should visit in this year",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (7).png",
        newsTitle: "travel booking before missing the discount",
        publishDate: "September 19, 2022"
    },
    {
        imgUrl: "/images/Rectangle 24 (8).png",
        newsTitle: "where can i go? 5 amazing countries that are open right now",
        publishDate: "September 19, 2022"
    },
]

const TravelajaArticles = () => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <h1 className='text-4xl font-normal text-center '>Travelaja Articles</h1>
            <p className='text-center py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-5 w-full xl:w-2/3 mx-auto py-5 '>
                {["Adventure Travel", "Beach", "Explore World", "Family Holidays", "Art and culture"].map((name, i) => {
                    return <Button onClick={() => setIndex(i)} size={"lg"} className={cn(`${index === i ? "text-lg font-bold text-white" : "bg-transparent text-lg  hover:text-white font-bold "}" `)} key={i}>{name}</Button>
                })}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 px-2 py-10'>
                {newsCardData.map((news, i) => {
                    return <NewsCard key={i} news={news} />
                })}
            </div>
        </div>
    );
};

export default TravelajaArticles;