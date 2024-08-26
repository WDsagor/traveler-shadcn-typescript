import PageBaner from '@/components/share/PageBaner';
import { pageTitle } from '@/lib/type';
import React from 'react';
import DiscoverSection from './DiscoverSection';
const pageTitleInfo: pageTitle = {
    pageTitle: "Discover", imgUrl: "/images/Mask group.png"
}
const page = () => {
    return (
        <section>
            <PageBaner pageTitleInfo={pageTitleInfo} />
            <div className='max-w-screen-2xl px-3 mx-auto'>
                <DiscoverSection />
            </div>
        </section>
    );
};

export default page;