import { Column, Columns, DataTable, Table } from '@ctablex/core';
import React from 'react';
import { Item } from './types';

interface Props {
  data: Item[];
}

export function BasicTable(props: Props) {
  return (
    <DataTable data={props.data}>
      <Columns>
        <Column header="Name" accessor="name" />
        <Column
          header="Price"
          accessor="price"
          TdProps={{ align: 'right' }}
          ThProps={{ align: 'right' }}
        />
        <Column
          header="Count"
          accessor="count"
          TdProps={{ align: 'right' }}
          ThProps={{ align: 'right' }}
        />
      </Columns>
      <Table />
    </DataTable>
  );
}
