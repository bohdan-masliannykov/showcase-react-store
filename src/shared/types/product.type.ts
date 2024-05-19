type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
  title: string;
  price: number;
  quantity?: number;
};
