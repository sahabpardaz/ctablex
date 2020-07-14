import React, { PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';
import { TablePartContextProvider } from './TablePartContext';

interface TableBodyOwnProps<D> {}

export type TableBodyProps<D> = PropsWithChildren<TableBodyOwnProps<D>>;

export function TableBody<D>(props: TableBodyProps<D>) {
  const { children } = props;
  const Components = useTableComponents();

  return (
    <TablePartContextProvider value="body">
      <Components.Tbody>{children}</Components.Tbody>
    </TablePartContextProvider>
  );
}
