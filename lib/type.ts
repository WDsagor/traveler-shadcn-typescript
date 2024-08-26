export type cardDatatypes = { place: string; img: string; price: number, days: number }
export type testimonialDatatypes = { name: string; userImg: string; description: string }
export type pageTitle = { pageTitle: string; imgUrl: string; }
export interface cardInfo {
    card: cardDatatypes,
  }
export interface testimonialInfo {
  testimonial: testimonialDatatypes,
  }
export interface pageHeaderInfo {
  pageTitleInfo: pageTitle,
  }