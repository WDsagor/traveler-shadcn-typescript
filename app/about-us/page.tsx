import PageBaner from '@/components/share/PageBaner';
import { pageTitle } from '@/lib/type';
import React from 'react';
import WhyChose from './WhyChose';
const pageTitleInfo: pageTitle = {
    pageTitle: "About Us", imgUrl: "/images/about-us.png"
}



const page = () => {
    return (
        <section>
            <PageBaner pageTitleInfo={pageTitleInfo} />
            <div className='max-w-screen-2xl px-3 mx-auto py-24'>
                <h1 className='text-4xl font-bold text-center '>Why Choose Us ?</h1>
                <p className='text-center py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                <WhyChose />
            </div>

        </section>
    );
};

export default page;