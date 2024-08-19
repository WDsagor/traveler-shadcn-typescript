import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonialInfo } from '@/lib/type';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React, { FC } from 'react';

const TestimonialCard: FC<testimonialInfo> = ({ testimonial }): JSX.Element => {
    return (

        <>
            <Card className=' group  transition-colors  hover:bg-primary  cursor-pointer group  overflow-hidden border-none shadow-none'>
                <CardContent>


                    <CardHeader className='flex flex-row gap-5 px-0'>
                        <Avatar>
                            <AvatarImage src={testimonial?.userImg} alt={testimonial?.name} />
                            <AvatarFallback>Name</AvatarFallback>
                        </Avatar>
                        <CardTitle className='my-5 font-bold group-hover:text-white'>{testimonial?.name}</CardTitle>
                    </CardHeader>
                    <CardDescription className='text-lg group-hover:text-white'>{testimonial?.description}</CardDescription>
                </CardContent>

            </Card>

        </>

    );
};

export default TestimonialCard;