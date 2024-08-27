import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { MdLocationPin } from "react-icons/md";

const PlaceDetails = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 py-5'>
            <div className=' basis-2/3 text-justify'>
                <Image className='' src={"/images/bali beach.png"} alt='place name' width={1200} height={100} />
                <h1 className='text-4xl pt-5 pb-2'>Memorable Festivals on Bali Beach</h1>
                <p className='flex text-xl text-secondary items-center pb-8'><MdLocationPin className='text-primary mr-2' size={30} /> Bali, Indonesia</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. </p>
                <div className='flex flex-col md:flex-row gap-10 py-8 '>
                    <Image src={"/images/Rectangle 18.png"} alt='place name' width={800} height={100} />
                    <Image src={"/images/Rectangle 19.png"} alt='place name' width={800} height={100} />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.</p>
            </div>
            <div className='basis-1/3'>
                <h1 className=' text-3xl flex justify-between items-center'><span>Other Destinations</span> <span ><Button className='text-2xl hover:no-underline' variant={'link'} size='lg'> See all</Button></span></h1>
            </div>
        </div>
    );
};

export default PlaceDetails;