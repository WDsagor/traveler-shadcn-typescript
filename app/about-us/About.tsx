import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section className='flex flex-col-reverse md:flex-row gap-10 items-center pt-20'>
            <div className='basis-2/3'>
                <h1 className='text-4xl font-bold pb-2'>About Travelaja.com</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat. Platea in diam, est congue. Posuere sapien morbi augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus nibh. Egestas semper massa viverra massa proin in morbi placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit pellentesque id cras lobortis tortor, blandit.</p>
                <p className='text-justify pt-5'>Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae. Malesuada velit, at mattis adipiscing quisque tristique id magna. Blandit porta sit nam magna sit. Turpis vestibulum facilisis placerat habitant gravida eget. Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.</p>
            </div>
            <div>
                <Image src={"/images/Rectangle 25.png"} width={400} height={400} alt='About image' />
            </div>
        </section>
    );
};

export default About;