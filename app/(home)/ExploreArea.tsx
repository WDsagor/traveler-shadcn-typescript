import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoLocationSharp } from 'react-icons/io5';

const ExploreArea = () => {
    return (
        <div className='min-h-svh w-full mt-[-75px]' style={{
            background: `url("/images/Background.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <section className='container h-full max-w-4xl  mx-auto text-white'>

                <h1 className='text-6xl pt-72 text-center mb-2 '>Explore the world with a smile</h1>
                <p className=' text-center text-base mb-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,</p>
                <Card className=' bg-opacity-10 flex items-center justify-between p-4'>
                    <div className=' flex items-center gap-5'>
                        <IoLocationSharp size={30} />
                        <h2 className='text-2xl'>City or Destination</h2>
                    </div>
                    <div className=' border border-l-2 h-12 border-accent'></div>
                    <div className=' flex items-center'>

                        <h2 className='text-2xl'>Date of stay</h2>
                    </div>
                    <div className=' border border-l-2 h-12 border-accent'></div>
                    <div className=' flex items-center justify-between gap-10'>

                        <h2 className='text-2xl'>Person</h2>
                        <Button >Find Trip Now <CiSearch className='ml-2' size={30} /></Button>
                    </div>
                </Card>
            </section>

        </div>
    );
};

export default ExploreArea;