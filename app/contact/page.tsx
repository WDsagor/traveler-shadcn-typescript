import PageBaner from '@/components/share/PageBaner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { pageTitle } from '@/lib/type';
import { Label } from '@radix-ui/react-dropdown-menu';
import React from 'react';
const pageTitleInfo: pageTitle = {
    pageTitle: "Contact Us", imgUrl: "/images/contact.png"
}


const componentName = () => {
    return (
        <section>
            <PageBaner pageTitleInfo={pageTitleInfo} />
           <div className='max-w-screen-2xl px-3 mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='font-bold py-5 text-3xl'>Get in touch</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</p>
                <form className='mt-10' action="">
                    <div className="grid w-full items-center gap-1.5">
                        <Label >Name</Label>
                        <Input type="text" id="email" placeholder="Input your name" />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mt-5">
                        <Label >Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mt-5">
                        <Label >Message</Label>
                        <Textarea  placeholder="Type your massages" />
                    </div>
                    <Button className='text-white font-semibold mt-5' type='submit'> Send</Button>
                </form>
            </div>
            <div>2</div>
           </div>
        </section>
    );
};

export default componentName;