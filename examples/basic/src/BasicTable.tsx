import React from 'react';
import {
  DataTable,
  Columns,
  Column,
  Table,
  TableHeader,
  HeaderRow,
  TableBody,
  Rows,
  Row,
} from '@ctablex/core';
import { Item } from './types';

interface Props {
  data: Item[];
}

export function BasicTable(props: Props) {
  return (
    <DataTable data={props.data}>
      <Columns>
        <Column header="Name" accessor="name" />
        <Column header="Price" accessor="price" />
        <Column header="Count" accessor="count" />
      </Columns>
      <Table>
        <TableHeader>
          <HeaderRow />
        </TableHeader>
        <TableBody>
          <Rows>
            <Row />
          </Rows>
        </TableBody>
      </Table>
    </DataTable>
  );
}
