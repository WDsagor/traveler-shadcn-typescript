import Image from 'next/image';
import React from 'react';

const OurTeam = () => {
    return (
        <section>
            <div className='max-w-xl'>
                <h1 className='text-4xl font-bold pb-3 pt-10'>Our Teams</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam et necessitatibus modi dolor doloribus illum nihil quis cumque aperiam.</p>
            </div>
            <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 pt-10'>
                <div>
                    <Image src={"/images/Rectangle 30.png"} width={300} height={300} alt='Agung perdana' />
                    <h1 className='text-2xl pt-2'>Agung perdana</h1>
                    <p>Web Designer</p>
                </div>
                <div>
                    <Image src={"/images/Rectangle 30 (1).png"} width={300} height={300} alt='Viola Resti' />
                    <h1 className='text-2xl pt-2'>Viola Resti</h1>
                    <p>Marketing Director</p>
                </div>
                <div>
                    <Image src={"/images/Rectangle 30 (2).png"} width={300} height={300} alt='Rahardianysah' />
                    <h1 className='text-2xl pt-2'>Rahardianysah</h1>
                    <p>International Relations</p>
                </div>
                <div>
                    <Image src={"/images/Rectangle 30 (4).png"} width={300} height={300} alt='Andika' />
                    <h1 className='text-2xl pt-2'>Andika</h1>
                    <p>Medical Check</p>
                </div>
                <div>
                    <Image src={"/images/Rectangle 30 (3).png"} width={300} height={300} alt='Theresa Russell' />
                    <h1 className='text-2xl pt-2'>Theresa Russell</h1>
                    <p>Doctor Assistant</p>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;