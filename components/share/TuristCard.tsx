import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MdLocationPin } from 'react-icons/md';
import { Button } from '@/components/ui/button';


const TuristCard = () => {
    return (
        <div className='rounded-xl' style={{
            background: `url("/images/card-1.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Card className='bg-transparent border-none' >
                <CardHeader className='text-2xl font-bold text-white'> Wakatobi beach is a paradise for coral reets in indonesia</CardHeader>
                <CardContent>
                    <p className='flex text-xl text-white items-center pb-8'><MdLocationPin className='text-white mr-2' size={30} /> Bali, Indonesia</p>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className='hover:bg-white font-bold text-xl text-white hover:text-primary'>View More</Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default TuristCard;