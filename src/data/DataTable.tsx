import React, { PropsWithChildren } from 'react';
import { ColumnsProvider } from '../column/ColumnsContext';
import { findColumns } from '../column/findColumns';
import { TablePartProvider } from '../table/TablePartContext';
import { DataProvider, useData } from './DataContext';

interface DataTableOwnProps<D> {
  data?: ReadonlyArray<D>;
}

export type DataTableProps<D> = PropsWithChildren<DataTableOwnProps<D>>;

export function DataTable<D>(props: DataTableProps<D>) {
  const { children } = props;
  const columns = findColumns(children);
  const data = useData<D>(props.data);
  return (
    <DataProvider value={data}>
      <TablePartProvider value="definition">
        <ColumnsProvider value={columns}>{children}</ColumnsProvider>
      </TablePartProvider>
    </DataProvider>
  );
}
