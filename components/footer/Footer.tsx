import Link from 'next/link';
import React from 'react';
import { SlSocialInstagram, SlSocialDribbble } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { FaTwitter, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-primary-foreground text-white text-center md:text-left'>
            <section className='max-w-screen-2xl px-3 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 pt-12'>
                <div className='p-5'>
                    <h1 className='text-4xl font-medium mb-5'>traveler</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
                </div>
                <div className='p-5'>
                    <h1 className='text-xl mb-5 mt-4 font-medium'>Quick Link</h1>

                    <span className='flex flex-col'>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/discover"}>Discover</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/special-deals"}>Special Deals</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/services"}>Services</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/community"}>Community</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/about-us"}>About Us</Link>
                    </span>
                </div>
                <div className='p-5'>
                    <h1 className='text-xl mb-5 mt-4 font-medium'>Services</h1>

                    <span className='flex flex-col'>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/about-us"}>About Us</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/blog-articles"}>Blog & Articles</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/t&c"}>Term and Condition</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/privacy-policy"}>Privacy Policy</Link>
                        <Link className='p-1 hover:font-medium transition-all ' href={"/contact-us"}>Contact Us</Link>
                    </span>
                </div>
                <div className='p-5 leading-loose'>
                    <h1 className='text-xl mb-5 mt-4 font-medium'>Contact Details</h1>

                    <p>ADdress: Jl.Codelaras No.205A <br /> Kediri, Pare AG17</p>
                    <p>Phone: 123 456 7890</p>
                    <p>Email: myagungperdana@gmail.com</p>
                    <p>Maps: Kediri, East java</p>
                </div>


            </section>
            <div className='max-w-screen-2xl px-5 pb-16 mx-auto'>
                <h1 className='text-xl mb-5 mt-4 font-medium'>Follow Us</h1>
                <span className='flex flex-row items-center gap-5'>
                    <SlSocialInstagram size={25} />
                    <SiFacebook size={25} />
                    <FaTwitter size={25} />
                    <SlSocialDribbble size={25} />
                    <FaGithub size={25} />
                </span>
            </div>
        </footer>
    );
};

export default Footer;