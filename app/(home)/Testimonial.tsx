import { cardDatatypes, testimonialDatatypes } from '@/lib/type';
import React from 'react';
import TestimonialCard from './TestimonialCard';
const testimonialDatas: testimonialDatatypes[] = [
    {
        name: "Angelina Simple",
        userImg: "/images/Ellipse.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",


    },
    {
        name: "Viola Natalie",
        userImg: "/images/Ellipse (1).png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",


    },
    {
        name: "Robert John K.",
        userImg: "/images/Ellipse (2).png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",


    },
    {
        name: "Anggi Nani",
        userImg: "/images/Ellipse (3).png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",


    },
    {
        name: "Graham Suryo J",
        userImg: "/images/Ellipse (4).png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",


    },
    {
        name: "Bagas G Natfi",
        userImg: "/images/Ellipse (5).png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",


    },

]


const Testimonial = () => {
    return (
        <div className=' max-w-screen-2xl px-2 py-10 mx-auto'>
            <h2 className='text-primary font-bold text-2xl mt-5 text-center'>Testimonial</h2>
            <h1 className=' py-4 text-5xl font-bold text-center '>What they say about us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12'>
                {
                    testimonialDatas.map((testimonial) =>
                        <TestimonialCard key={testimonial?.name} testimonial={testimonial} />
                    )
                }
            </div>
        </div>
    );
};

export default Testimonial;