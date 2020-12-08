import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { useCurrentValue } from '../array/CurrentValueContext';
import { Columns } from '../column/Columns';
import { useTableComponents } from '../TableComponentsContext';
import { RowDataProvider } from './RowDataContext';

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
  const { TrProps, children = <Columns /> } = props;
  const Components = useTableComponents();

  const row = useCurrentValue<D>(props.row);
  return (
    <RowDataProvider value={row}>
      <Components.Tr {...TrProps}>{children}</Components.Tr>
    </RowDataProvider>
  );
}
