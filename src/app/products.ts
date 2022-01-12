export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13 pro',
    price: 799,
    description: 'A large phone with one of the best screens',
    image_path:'./assets/images/apple.jpg'
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image_path:'./assets/images/mini.jpeg'
  },
  {
    id: 3,
    name: 'Phone Note 5 Pro',
    price: 499,
    description: 'A great phone with one of the best processor',
    image_path:'./assets/images/note5.jpeg'
  },
  {
    id: 4,
    name: 'Nokia Standard',
    price: 299,
    description: 'Super battery Mobile',
    image_path:'./assets/images/nokia.jpeg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/