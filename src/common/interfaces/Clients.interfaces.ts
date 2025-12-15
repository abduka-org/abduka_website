interface ITestimonial {
  id: number;
  image: string;
  title: string;
  review: string;
  rating: number;
}

export interface IClientsData {
  title: string;
  testimonials: ITestimonial[];
}
