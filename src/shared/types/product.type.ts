type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  category: string;
  description: string;
  images: string;
  rating: Rating;
  title: string;
};
