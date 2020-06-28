import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';
import { TablePartContextProvider } from './TablePartContext';

interface OwnProps<D> {}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function TableBody<D>(props: Props<D>) {
  const { children } = props;
  const Components = useTableComponentsContext();

  return (
    <TablePartContextProvider value="body">
      <Components.Tbody>{children}</Components.Tbody>
    </TablePartContextProvider>
  );
}
