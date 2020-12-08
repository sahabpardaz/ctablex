import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { useColumns } from '../column/ColumnsContext';
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
  const { TrProps } = props;
  const Components = useTableComponents();

  const columns = useColumns();

  return <Components.Tr {...TrProps}>{columns}</Components.Tr>;
}
