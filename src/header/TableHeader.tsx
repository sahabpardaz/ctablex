import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { TablePartProvider } from '../table/TablePartContext';
import { useTableComponents } from '../TableComponentsContext';
import { HeaderRow } from './HeaderRow';

interface TableHeaderOwnProps<C extends ComponentType> {
  TheadProps?: Partial<ComponentProps<C>>;
}

export type TableHeaderProps<C extends ComponentType> = PropsWithChildren<
  TableHeaderOwnProps<C>
>;

export function TableHeader<C extends ComponentType = ComponentType>(
  props: TableHeaderProps<C>,
) {
  const { children = <HeaderRow />, TheadProps } = props;
  const Components = useTableComponents();

  return (
    <TablePartProvider value="header">
      <Components.Thead {...TheadProps}>{children}</Components.Thead>
    </TablePartProvider>
  );
}
