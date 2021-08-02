import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { Columns } from '../column/Columns';
import { useTableComponents } from '../TableComponentsContext';
import { CurrentRowDataProvider } from './CurrentRowDataProvider';

interface RowOwnProps<D, C extends ComponentType> {
  row?: D;
  TrProps?: Partial<ComponentProps<C>>;
}

export type RowProps<D, C extends ComponentType> = PropsWithChildren<
  RowOwnProps<D, C>
>;

export function Row<D, C extends ComponentType = ComponentType>(
  props: RowProps<D, C>,
) {
  const { TrProps, children = <Columns />, row } = props;
  const Components = useTableComponents();

  return (
    <CurrentRowDataProvider row={row}>
      <Components.Tr {...TrProps}>{children}</Components.Tr>
    </CurrentRowDataProvider>
  );
}
