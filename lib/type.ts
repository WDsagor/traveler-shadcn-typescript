export type cardDatatypes = { place: string; img: string; price: number, days: number }
export type testimonialDatatypes = { name: string; userImg: string; description: string }
export interface cardInfo {
    card: cardDatatypes,
  }
export interface testimonialInfo {
  testimonial: testimonialDatatypes,
  }