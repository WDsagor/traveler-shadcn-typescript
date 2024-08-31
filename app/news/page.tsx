import PageBaner from '@/components/share/PageBaner';
import { pageTitle } from '@/lib/type';
import React from 'react';
import TravelajaArticles from './TravelajaArticles';
const pageTitleInfo: pageTitle = {
    pageTitle: "Our News", imgUrl: "/images/Banner.png"
}

const page = () => {
    return (
        <section>
            <PageBaner pageTitleInfo={pageTitleInfo} />
            <div className='max-w-screen-2xl px-3 mx-auto py-24'>
                <TravelajaArticles />
            </div>

        </section>
    );
};

export default page;