import {
  Column,
  Columns,
  DataTable,
  HeaderRow,
  Row,
  Rows,
  Table,
  TableBody,
  TableHeader,
} from '@ctablex/core';
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
        <Column header="Price" accessor="price">
          <NumberContent />
        </Column>
        <Column header="Count" accessor="count">
          <NumberContent />
        </Column>
        <Column header="Free Delivery" accessor="freeDelivery">
          <BooleanContent yes="Yes" no="No" />
        </Column>
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
