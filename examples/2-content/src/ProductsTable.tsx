import { Column, Columns, DataTable, Table } from '@ctablex/core';
import React from 'react';
import { BooleanContent } from './BooleanContent';
import { NumberContent } from './NumberContent';
import { Item } from './types';

interface Props {
  data: Item[];
}

export function ProductsTable(props: Props) {
  return (
    <DataTable data={props.data}>
      <Columns>
        <Column header="Name" accessor="name" />
        <Column header="Free Delivery" accessor="freeDelivery">
          <BooleanContent yes="Yes" no="No" />
        </Column>
        <Column
          header="Price"
          accessor="price"
          TdProps={{ align: 'right' }}
          ThProps={{ align: 'right' }}
        >
          <NumberContent />
        </Column>
        <Column
          header="Count"
          accessor="count"
          TdProps={{ align: 'right' }}
          ThProps={{ align: 'right' }}
        >
          <NumberContent />
        </Column>
      </Columns>
      <Table />
    </DataTable>
  );
}
