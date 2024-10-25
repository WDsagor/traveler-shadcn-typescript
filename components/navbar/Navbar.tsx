"use client"
import Link from 'next/link';
import React from 'react';
// import { Icons } from "@/components/icons"
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
// import ListItem from './ListItem';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from 'next/navigation';


export const menuItems: { menuName: string, url: string }[] = [{
    menuName: "Home",
    url: "/"
}, {
    menuName: "Discover",
    url: "/discover"

},
{
    menuName: "Services",
    url: "/services"
},
{
    menuName: "News",
    url: "/news"
},
{
    menuName: "About Us",
    url: "/about-us"
},
{
    menuName: "Contact",
    url: "/contact"
},
]
const components: { title: string; href: string; }[] = [
    {
        title: "Profile",
        href: "/"

    },
    {
        title: "Logout",
        href: "/"

    },

]

const Navbar = () => {
    const pathName= usePathname()
    console.log(pathName)
    return (
        <nav className={` sticky top-0 ${pathName==='/'?"text-white bg-black bg-opacity-30":"text-black bg-white"}`}>
            <div className='max-w-screen-2xl mx-auto py-4 px-2 flex justify-between'>

                <Link href={"/"} className='text-4xl font-semibold' >traveler</Link>
                <div className=' flex gap-5 items-center'>
                    {menuItems.map(({ menuName, url }, index) =>
                        <Link className={`py-2 px-4 ${pathName=== url? "text-green-500 font-bold":"hover:text-green-500"}`} href={url} key={index}>{menuName}</Link>
                    )}
                </div>

                <div className=''>
                    <DropdownMenu >
                        <DropdownMenuTrigger className='flex items-center gap-2'> <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>Name</AvatarFallback>
                        </Avatar> ID <FaChevronDown size={15} /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <Link href={"/"}> <DropdownMenuItem className='focus:bg-primary  focus:text-white cursor-pointer'  > Profile</DropdownMenuItem></Link>
                            <Link href={"/"}> <DropdownMenuItem className='focus:bg-primary  focus:text-white cursor-pointer'  > Billing</DropdownMenuItem></Link>
                            <Link href={"/"}> <DropdownMenuItem className=' focus:bg-primary focus:text-white cursor-pointer'  > Team</DropdownMenuItem></Link>
                            <Link href={"/"}> <DropdownMenuItem className=' focus:bg-primary focus:text-white cursor-pointer'  > Logout</DropdownMenuItem></Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;