"use client"
import React, { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MdLocationPin } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { placeInfo } from '@/lib/type';
import { usePathname } from 'next/navigation';


const TuristCard: FC<placeInfo> = ({ place }): JSX.Element => {
    const pathName = usePathname()
    // console.log(pathName);
    return (
        <div className='rounded-xl' style={{
            background: `url("${place.img}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Card className='bg-transparent border-none' >
                <CardHeader className='text-2xl font-bold text-white'> <h1>{pathName != "/services" ? place.title : place.place}</h1>
                    {place?.date && <h1 className='font-bold text-xl'>{place?.date}</h1>}

                </CardHeader>

                <CardContent>
                    <p className='flex text-xl text-white items-center pb-8'>{pathName != "/services" && <MdLocationPin className='text-white mr-2' size={30} />} {pathName != "/services" ? place.place : place.title}</p>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className={` ${pathName != "/services" ? "" : "bg-transparent border border-primary"}  'hover:bg-white font-bold text-xl text-white hover:text-primary'`}>{pathName != "/services" ? "View More" : "Read More"}</Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default TuristCard;