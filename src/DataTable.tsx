import React, { PropsWithChildren } from 'react';
import { ColumnsContextProvider } from './ColumnsContext';
import { DataContextProvider, useDataContext } from './DataContext';
import { TablePartContextProvider } from './TablePartContext';
import { findColumns } from './utils/findColumns';

interface OwnProps<D> {
  data?: ReadonlyArray<D>;
}

type Props<D> = PropsWithChildren<OwnProps<D>>;

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
