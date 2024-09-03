import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import { neswsData } from '@/lib/type';
import Image from 'next/image';
import React, { FC } from 'react';

const NewsCard: FC<neswsData> = ({ news }): JSX.Element => {
    return (
        <>
            <Card className=' border-none shadow-none'>
                <Image src={news?.imgUrl} width={800} height={800} alt={news?.newsTitle} />

                <CardTitle className='py-5'>{news.newsTitle}</CardTitle>

                <h1 className=''>{news.publishDate}</h1>
            </Card>
        </>
    );
};

export default NewsCard;