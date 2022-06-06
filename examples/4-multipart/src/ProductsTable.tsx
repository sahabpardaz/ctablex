import {
  Column,
  Columns,
  ContentValue,
  DataTable,
  Row,
  Rows,
  Table,
  TableHeader,
  TableBody,
} from '@ctablex/core';
import { Tooltip } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { BooleanContent } from './BooleanContent';
import { NumberContent } from './NumberContent';
import { Item } from './types';

interface Props {
  data: Item[];
}

const itemPrice = (item: Item) =>
  item.price * item.count + (item.freeDelivery ? 0 : 100);

export function ProductsTable(props: Props) {
  const { data } = props;
  const sumRowData = useMemo(() => {
    const total = data.reduce((s, item) => {
      return s + itemPrice(item);
    }, 0);
    return { total };
  }, [data]);
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
        <Column
          header="Sum"
          TdProps={{ align: 'right' }}
          ThProps={{ align: 'right' }}
        >
          <ContentValue accessor="price">
            <NumberContent />
          </ContentValue>
          {' x '}
          <ContentValue accessor="count">
            <NumberContent />
          </ContentValue>
          <ContentValue accessor="freeDelivery">
            <BooleanContent
              no={
                <Fragment>
                  {' + '}
                  <Tooltip title="delivery">
                    <span>100</span>
                  </Tooltip>
                </Fragment>
              }
            />
          </ContentValue>
          {' = '}
          <ContentValue accessor={(item: Item) => itemPrice(item)}>
            <NumberContent />
          </ContentValue>
        </Column>
      </Columns>
      <Columns part="sum">
        <Column TdProps={{ colspan: 4, align: 'right' }}>Total:</Column>
        <Column accessor="total" TdProps={{ align: 'right' }}>
          <NumberContent />
        </Column>
      </Columns>
      <Table>
        <TableHeader />
        <TableBody>
          <Rows>
            <Row>
              <Columns />
            </Row>
          </Rows>
          <Row
            row={sumRowData}
            TrProps={{ sx: { backgroundColor: 'grey.200' } }}
          >
            <Columns part="sum" />
          </Row>
        </TableBody>
      </Table>
    </DataTable>
  );
}
