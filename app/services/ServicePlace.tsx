import TuristCard from '@/components/share/TuristCard';
import { placeDatatypes } from '@/lib/type';
import React from 'react';

const placeData: placeDatatypes[] = [{

    place: "Water City Dreams",
    date: "September 18, 2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: "/images/Rectangle 21.png",

},
{

    place: "Water City Dreams",
    date: "September 18, 2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: "/images/Rectangle 21 (1).png",

},
{

    place: "Water City Dreams",
    date: "September 18, 2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: "/images/Rectangle 21 (2).png",

},
]

const ServicePlace = () => {
    return (
        <div className='px-3 grid grid-cols-1 xl:grid-cols-3 gap-8 pb-16 pt-10' >
            {
                placeData.map((place, i) => {
                    return <TuristCard place={place} key={i} />
                })
            }
        </div>
    );
};

export default ServicePlace;