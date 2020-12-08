import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';

interface HeaderCellOwnProps<C extends ComponentType> {
  ThProps?: Partial<ComponentProps<C>>;
}

export type HeaderCellProps<C extends ComponentType> = PropsWithChildren<
  HeaderCellOwnProps<C>
>;

export function HeaderCell<C extends ComponentType = ComponentType>(
  props: HeaderCellProps<C>,
) {
  const { children, ThProps } = props;

  const Components = useTableComponents();

  return <Components.Th {...ThProps}>{children}</Components.Th>;
}
