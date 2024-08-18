import Image from 'next/image';
import React from 'react';

const TravelPoint = () => {
    return (
        <section className=' max-w-screen-2xl px-2 py-24 mx-auto flex flex-col lg:flex-row gap-20'>

            <Image width={600} height={500} src={"/images/Travelgroup.png"} alt='Travel group image' />
            <div>
                <h2 className='text-primary font-bold text-2xl mt-5'>Travelers Point</h2>
                <h1 className=' py-4 text-5xl font-bold'>We help to find your dream place</h1>
                <p className='text-accent text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi</p>
                <div className=' grid grid-cols-2 gap-10 py-10'>
                    <div>
                        <h1 className='text-primary text-5xl font-bold'>100+</h1>
                        <p className='text-accent text-xl ml-2'>Holiday Package</p>
                    </div>
                    <div>
                        <h1 className='text-primary text-5xl font-bold'>172</h1>
                        <p className='text-accent text-xl ml-2'>Hotels</p>
                    </div>
                    <div>
                        <h1 className='text-primary text-5xl font-bold'>68</h1>
                        <p className='text-accent text-xl ml-2'>Elite Transportation</p>
                    </div>
                    <div>
                        <h1 className='text-primary text-5xl font-bold'>30M+</h1>
                        <p className='text-accent text-xl ml-2'>we help to find your dream place</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelPoint;