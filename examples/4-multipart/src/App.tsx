import { CssBaseline } from '@mui/material';
import React, { Fragment } from 'react';
import { generateData } from './data';
import { MuiTableProvider } from './MuiTableProvider';
import { ProductsTable } from './ProductsTable';

export const data = generateData(5);

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MuiTableProvider>
        <ProductsTable data={data} />
      </MuiTableProvider>
    </Fragment>
  );
}
