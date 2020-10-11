import React, { PropsWithChildren } from 'react';
import { TablePartProvider } from '../table/TablePartContext';
import { useTableComponents } from '../TableComponentsContext';

interface TableFooterOwnProps {}

export type TableFooterProps = PropsWithChildren<TableFooterOwnProps>;

export function TableFooter(props: TableFooterProps) {
  const { children } = props;
  const Components = useTableComponents();

  return (
    <TablePartProvider value="footer">
      <Components.Tfoot>{children}</Components.Tfoot>
    </TablePartProvider>
  );
}
