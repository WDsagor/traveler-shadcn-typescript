import { Button } from '@/components/ui/button';
import React from 'react';

const TravelajaArticles = () => {
    return (
        <div>
            <h1 className='text-4xl font-normal text-center '>Travelaja Articles</h1>
            <p className='text-center py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-5 w-full xl:w-2/3 mx-auto py-5 '>
                {["Adventure Travel", "Beach", "Explore World", "Family Holidays", "Art and culture"].map((name, i) => {
                    return <Button size={"lg"} className='text-lg text-white' key={i}>{name}</Button>
                })}
            </div>
        </div>
    );
};

export default TravelajaArticles;