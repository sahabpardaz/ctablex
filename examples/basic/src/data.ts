import faker from 'faker';
import { Item } from './types';

export function generateData(n: number, seed: number = 0): Item[] {
  faker.seed(seed);
  return Array.from(Array(n)).map((_, index) => {
    return {
      id: index + '',
      name: faker.commerce.productName(),
      price: faker.random.number(1000),
      count: faker.random.number(20),
    };
  });
}
