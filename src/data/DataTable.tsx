import React, { PropsWithChildren } from 'react';
import { ColumnsContextProvider } from '../column/ColumnsContext';
import { findColumns } from '../column/findColumns';
import { TablePartContextProvider } from '../table/TablePartContext';
import { DataContextProvider, useDataContext } from './DataContext';

interface OwnProps<D> {
  data?: ReadonlyArray<D>;
}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function DataTable<D>(props: Props<D>) {
  const columns = findColumns(props.children);
  const data = useDataContext<D>(props.data);
  return (
    <DataContextProvider value={data}>
      <TablePartContextProvider value="definition">
        <ColumnsContextProvider value={columns}>
          {props.children}
        </ColumnsContextProvider>
      </TablePartContextProvider>
    </DataContextProvider>
  );
}
