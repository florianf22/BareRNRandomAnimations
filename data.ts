export default [
  {
    id: '0',
    uri: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Tiny House',
    description: 'A tiny house in the woods',
    price: '$100,000',
    rating: '4.5',
    reviews: '1,000',
    type: 'SUPERHOT',
  },
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    title: 'House with Pool',
    description: 'A house with a pool in the middle',
    price: '$200,000',
    rating: '4.5',
    reviews: '1,121',
    type: 'SUPERHOT',
  },
];

export interface Property {
  id: string;
  uri: string;
  title: string;
  description: string;
  price: string;
  rating: string;
  reviews: string;
  type: string;
}
