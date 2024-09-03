import { neswsData } from '@/lib/type';
import Image from 'next/image';
import React, { FC } from 'react';

const WhyChoseCard: FC<neswsData> = ({ news }): JSX.Element => {
    return (
        <div className='flex flex-col items-center' >
            <Image src={news.imgUrl} width={150} height={150} alt={news.newsTitle} />
            <h1 className='py-2 text-4xl font-medium'>{news.newsTitle}</h1>
            <p>{news.publishDate}</p>
        </div>
    );
};

export default WhyChoseCard;