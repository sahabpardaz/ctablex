import React, { PropsWithChildren } from 'react';
import { TablePartContextProvider } from './TablePartContext';
import { useTableUIAdapterContext } from '../TableUIAdapterContext';
import { Accessor } from '../utils/accessor';

interface OwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function TableBody<D>(props: Props<D>) {
  const { children } = props;
  const Adapter = useTableUIAdapterContext();

  return (
    <TablePartContextProvider value="body">
      <Adapter.tbody>{children}</Adapter.tbody>
    </TablePartContextProvider>
  );
}
