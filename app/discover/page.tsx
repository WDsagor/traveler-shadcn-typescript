import PageBaner from '@/components/share/PageBaner';
import { pageTitle } from '@/lib/type';
import React from 'react';
import DiscoverSection from './DiscoverSection';
import PlaceDetails from './PlaceDetails';
const pageTitleInfo: pageTitle = {
    pageTitle: "Discover", imgUrl: "/images/Mask group.png"
}
const page = () => {
    return (
        <section>
            <PageBaner pageTitleInfo={pageTitleInfo} />
            <div className='max-w-screen-2xl px-3 mx-auto'>
                <DiscoverSection />
                <PlaceDetails />

            </div>
        </section>
    );
};

export default page;