import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const Facilities = () => {
    return (
        <div className=' w-full' style={{
            background: `url("/images/facilities.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className='max-w-screen-2xl mx-auto px-3 py-24 flex flex-col xl:flex-row gap-10 items-center'>
                <div className=' basis-1/2  text-white'>
                    <div className='px-3'>
                        <h1 className='text-4xl font-bold'>Facilities</h1>
                        <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non eni</p>
                        <Button size="lg" className='text-white text-xl'>Read More</Button>
                    </div>
                </div>
                <div className='px-3 basis-1/2 grid grid-cols-2 gap-5'>
                    <Card className=' flex justify-center items-center text-center align-middle'>
                        <CardContent className='flex flex-col justify-center items-center align-middle text-center p-10'>
                            <Image height={60} width={60} className='' src={"/icons/mdi_baby-buggy.png"} alt='mdi_baby-buggy.png' />
                            <CardTitle className='text-4xl'>Baby</CardTitle>
                            <p>FREE BUGGY</p>
                        </CardContent>

                    </Card>
                    <Card className=' flex justify-center items-center text-center align-middle'>
                        <CardContent className='flex flex-col justify-center items-center align-middle text-center p-10'>
                            <Image height={60} width={60} className='' src={"/icons/fluent_drink-wine-24-filled.png"} alt='fluent_drink-wine-24-filled.png' />
                            <CardTitle className='text-4xl'>Drinks</CardTitle>
                            <p>INCLUDED</p>
                        </CardContent>

                    </Card>
                    <Card className=' flex justify-center items-center text-center align-middle'>
                        <CardContent className='flex flex-col justify-center items-center align-middle text-center p-10'>
                            <Image height={60} width={60} className='' src={"/icons/fluent-emoji-high-contrast_camping.png"} alt='fluent-emoji-high-contrast_camping.png' />
                            <CardTitle className='text-4xl'>Camp</CardTitle>
                            <p>INCLUDED</p>
                        </CardContent>

                    </Card>
                    <Card className=' flex justify-center items-center text-center align-middle'>
                        <CardContent className='flex flex-col justify-center items-center align-middle text-center p-10'>
                            <Image height={60} width={60} className='' src={"/icons/emojione-monotone_world-map.png"} alt='emojione-monotone_world-map.png' />
                            <CardTitle className='text-4xl'>World</CardTitle>
                            <p>CUSTOM TOURS</p>
                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Facilities;