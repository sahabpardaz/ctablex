import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';
import { TablePartProvider } from './TablePartContext';

interface TableBodyOwnProps<D, C extends ComponentType> {
  TbodyProps?: Partial<ComponentProps<C>>;
}

export type TableBodyProps<D, C extends ComponentType> = PropsWithChildren<
  TableBodyOwnProps<D, C>
>;

export function TableBody<D, C extends ComponentType = ComponentType>(
  props: TableBodyProps<D, C>,
) {
  const { children, TbodyProps } = props;
  const Components = useTableComponents();

  return (
    <TablePartProvider value="body">
      <Components.Tbody {...TbodyProps}>{children}</Components.Tbody>
    </TablePartProvider>
  );
}
