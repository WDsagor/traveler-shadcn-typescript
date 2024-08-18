import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoLocationSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { CiSearch } from "react-icons/ci";
import ExploreArea from './ExploreArea';
import TravelPoint from './TravelPoint';


const page = () => {
  return (
    <div>
      <ExploreArea />
      <TravelPoint />
    </div>
  );
};

export default page;