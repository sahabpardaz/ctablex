import React, { PropsWithChildren } from 'react';
import { TablePartContextProvider } from '../table/TablePartContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function TableHeader(props: Props) {
  const { children } = props;
  const Adapter = useTableComponentsContext();

  return (
    <TablePartContextProvider value="header">
      <Adapter.thead>{children}</Adapter.thead>
    </TablePartContextProvider>
  );
}
