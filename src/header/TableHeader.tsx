import React, { PropsWithChildren } from 'react';
import { TablePartContextProvider } from '../table/TablePartContext';
import { useTableUIAdapterContext } from '../TableUIAdapterContext';

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function TableHeader(props: Props) {
  const { children } = props;
  const Adapter = useTableUIAdapterContext();

  return (
    <TablePartContextProvider value="header">
      <Adapter.thead>{children}</Adapter.thead>
    </TablePartContextProvider>
  );
}
