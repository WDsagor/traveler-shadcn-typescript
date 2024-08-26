import { pageHeaderInfo } from '@/lib/type';
import React, { FC } from 'react';
// import img from "/images/Discover.png"

const PageBaner: FC<pageHeaderInfo> = ({ pageTitleInfo }): JSX.Element => {
    return (
        <div className=' w-full h-64' style={{
            background: `url("${pageTitleInfo.imgUrl}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className=' max-w-screen-2xl mx-auto   px-3'>
                <h1 className=' font-bold text-5xl  text-white pt-32'>{pageTitleInfo.pageTitle}</h1>
            </div>
        </div>
    );
};

export default PageBaner;