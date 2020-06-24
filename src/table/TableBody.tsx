import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';
import { Accessor } from '../utils/accessor';
import { TablePartContextProvider } from './TablePartContext';

interface OwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function TableBody<D>(props: Props<D>) {
  const { children } = props;
  const Adapter = useTableComponentsContext();

  return (
    <TablePartContextProvider value="body">
      <Adapter.tbody>{children}</Adapter.tbody>
    </TablePartContextProvider>
  );
}
