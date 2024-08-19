import React, { FC } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import {
    Card,

    CardFooter,

    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { cardInfo } from '@/lib/type';


const DestinationCard: FC<cardInfo> = ({ card }): JSX.Element => {
    return (
        <>
            <Card className='p-3 cursor-pointer group  overflow-hidden'>
                <Image className='w-full group-hover:scale-110   transition-all duration-500' src={card?.img} width={400} height={400} alt='ok' />
                <CardTitle className='my-5'>{card?.place}</CardTitle>

                <CardFooter className='flex justify-between px-0 py-5'>
                    <p className='text-2xl font-bold'>$ {card.price}</p>
                    <p className='flex items-center gap-2'><FaPaperPlane /> {card?.days} days for trips</p>
                </CardFooter>
            </Card>

        </>
    );
};

export default DestinationCard;