import React, { PropsWithChildren } from 'react';
import { TablePartContextProvider } from '../table/TablePartContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface TableHeaderOwnProps {}

export type TableHeaderProps = PropsWithChildren<TableHeaderOwnProps>;

export function TableHeader(props: TableHeaderProps) {
  const { children } = props;
  const Components = useTableComponentsContext();

  return (
    <TablePartContextProvider value="header">
      <Components.Thead>{children}</Components.Thead>
    </TablePartContextProvider>
  );
}
