import React from 'react';
import { BasicTable } from './BasicTable';
import { generateData } from './data';

export const data = generateData(50);

export default function App() {
  return <BasicTable data={data} />;
}
