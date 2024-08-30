import React, { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MdLocationPin } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { placeInfo } from '@/lib/type';


const TuristCard: FC<placeInfo> = ({ place }): JSX.Element => {
    return (
        <div className='rounded-xl' style={{
            background: `url("${place.img}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Card className='bg-transparent border-none' >
                <CardHeader className='text-2xl font-bold text-white'> {place.title}</CardHeader>
                <CardContent>
                    <p className='flex text-xl text-white items-center pb-8'><MdLocationPin className='text-white mr-2' size={30} /> {place.place}</p>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className='hover:bg-white font-bold text-xl text-white hover:text-primary'>View More</Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default TuristCard;