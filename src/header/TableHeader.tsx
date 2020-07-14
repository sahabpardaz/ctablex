import React, { PropsWithChildren } from 'react';
import { TablePartProvider } from '../table/TablePartContext';
import { useTableComponents } from '../TableComponentsContext';

interface TableHeaderOwnProps {}

export type TableHeaderProps = PropsWithChildren<TableHeaderOwnProps>;

export function TableHeader(props: TableHeaderProps) {
  const { children } = props;
  const Components = useTableComponents();

  return (
    <TablePartProvider value="header">
      <Components.Thead>{children}</Components.Thead>
    </TablePartProvider>
  );
}
