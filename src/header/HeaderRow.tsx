import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { Columns } from '../column/Columns';
import { useTableComponents } from '../TableComponentsContext';

interface HeaderRowOwnProps<C extends ComponentType> {
  TrProps?: Partial<ComponentProps<C>>;
}

export type HeaderRowProps<C extends ComponentType> = PropsWithChildren<
  HeaderRowOwnProps<C>
>;

export function HeaderRow<C extends ComponentType = ComponentType>(
  props: HeaderRowProps<C>,
) {
  const { TrProps, children = <Columns /> } = props;
  const Components = useTableComponents();

  return <Components.Tr {...TrProps}>{children}</Components.Tr>;
}
