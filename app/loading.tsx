import Image from 'next/image';
import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <Image src={'/images/loader.gif'} width={600} height={600} alt='Loading image' />
        </div>
    );
};

export default loading;