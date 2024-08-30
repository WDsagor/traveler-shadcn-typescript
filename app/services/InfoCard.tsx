import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { serviceDataInfo } from '@/lib/type';
import React, { FC } from 'react';

const InfoCard: FC<serviceDataInfo> = ({ info }): JSX.Element => {
    return (
        <div>
            <Card className='border-none shadow-none'>
                <CardHeader>
                    <h1 className='text-6xl'>{info.icon}</h1>
                    <h1 className='font-bold text-2xl'>{info.title}</h1>
                </CardHeader>
                <CardContent>
                    <p>{info.description}</p>
                </CardContent>
                <CardFooter>
                    <Button className='text-white' size="lg">READ MORE</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default InfoCard