import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';

interface TableOwnProps<C extends ComponentType> {
  TableProps?: Partial<ComponentProps<C>>;
}

export type TableProps<C extends ComponentType> = PropsWithChildren<
  TableOwnProps<C>
>;

export function Table<C extends ComponentType = ComponentType>(
  props: TableProps<C>,
) {
  const { children, TableProps } = props;
  const Components = useTableComponents();
  return <Components.Table {...TableProps}>{children}</Components.Table>;
}
