import React, { PropsWithChildren } from 'react';
import { TablePartContextProvider } from '../table/TablePartContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function TableHeader(props: Props) {
  const { children } = props;
  const Components = useTableComponentsContext();

  return (
    <TablePartContextProvider value="header">
      <Components.Thead>{children}</Components.Thead>
    </TablePartContextProvider>
  );
}
