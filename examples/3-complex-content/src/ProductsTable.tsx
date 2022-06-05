import { Column, Columns, ContentValue, DataTable, Table } from '@ctablex/core';
import { Tooltip } from '@mui/material';
import React, { Fragment } from 'react';
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
          <ContentValue
            accessor={(r: Item) =>
              r.price * r.count + (r.freeDelivery ? 0 : 100)
            }
          >
            <NumberContent />
          </ContentValue>
        </Column>
      </Columns>
      <Table />
    </DataTable>
  );
}
