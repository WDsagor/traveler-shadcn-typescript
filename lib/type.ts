import { ReactNode } from "react";

export type cardDatatypes = { place: string; img: string; price: number, days: number }

export type placeDatatypes = { title: String, date: String, place: string; img: string; }

// export type servicePlaceDatatypes = { title: String, date: String, place: string; img: string; }

export type testimonialDatatypes = { name: string; userImg: string; description: string }

export type pageTitle = { pageTitle: string; imgUrl: string; }

export type serviceInfo = { icon: ReactNode, title:String, description: string; }
export type benefitsType = { imgUrl: string, title:String, description: string; }
export type neswsDataType = { imgUrl: string, newsTitle:string, publishDate: string; }



export interface cardInfo {
    card: cardDatatypes,
  }

export interface placeInfo {
    place: placeDatatypes,
  }

// export interface ServicePlaceInfo {
//     place: servicePlaceDatatypes,
//   }

export interface testimonialInfo {
  testimonial: testimonialDatatypes,
  }

export interface pageHeaderInfo {
  pageTitleInfo: pageTitle,
  }

export interface serviceDataInfo {
  info: serviceInfo,
  }
export interface benefitDataInfo {
  benefit: benefitsType,
  }
export interface neswsData {
  news: neswsDataType,
  }