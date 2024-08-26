import React from 'react';

const DiscoverSection = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-10 py-14'>
            <div className=' basis-2/3 text-justify'>
                <p className='flex gap-8 items-center'>
                    <span className='font-black text-6xl space-y-[-10px]'>D  </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi.

                </p>
                <p>
                    enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla fau.
                </p>
            </div>
            <div className='basis-1/3'><iframe className='border-none w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.207051839914!2d115.14224583238199!3d-8.662824490530312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247761fbbdb1b%3A0x42ce9723c5448e98!2sBerawa%20Beach%20Art%20Festival%2C%20From%20Beach!5e0!3m2!1sen!2sbd!4v1724699717618!5m2!1sen!2sbd" loading="lazy" ></iframe></div>
        </div>
    );
};

export default DiscoverSection;


