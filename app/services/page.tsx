import PageBaner from '@/components/share/PageBaner';
import { pageTitle } from '@/lib/type';
import React from 'react';
import InfoSection from './InfoSection';
import ServicePlace from './ServicePlace';
import Facilities from './Facilities';
import Benefit from './Benefit';
const pageTitleInfo: pageTitle = {
    pageTitle: "Services", imgUrl: "/images/services.png"
}

const page = () => {
    return (
        <section>
            <PageBaner pageTitleInfo={pageTitleInfo} />
            <div className='max-w-screen-2xl px-3 mx-auto'>

                <InfoSection />
                <ServicePlace />
            </div>
            <Facilities />
            <Benefit />
        </section>
    );
};

export default page;