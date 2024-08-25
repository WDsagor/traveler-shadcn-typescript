import React from 'react';
// import img from "/images/Discover.png"

const PageBaner = () => {
    return (
        <div className=' w-full h-64' style={{
            background: `url("/images/Mask group.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className=' max-w-screen-2xl mx-auto   px-3'>
                <h1 className=' font-bold text-5xl  text-white pt-32'>Discover</h1>
            </div>
        </div>
    );
};

export default PageBaner;