import { Button } from '@/components/ui/button';
import { benefitDataInfo } from '@/lib/type';
import Image from 'next/image';
import React, { FC } from 'react';

const BenefitCard: FC<benefitDataInfo> = ({ benefit }): JSX.Element => {
    return (
        <div className='flex gap-3 hover:bg-primary p-5 cursor-pointer rounded-lg'>
            <div className='h-24 w-24'>
                <Image src={`${benefit.imgUrl}`} width={100} height={100} alt={`${benefit.imgUrl}`} />
            </div>
            <div>
                <h1 className='font-bold text-4xl'>{benefit.title}</h1>
                <p className='py-2'>{benefit.description}</p>
                <Button size="lg" className='text-xl text-white hover:border-white border mt-5'>Read More</Button>
            </div>
        </div>
    );
};

export default BenefitCard;