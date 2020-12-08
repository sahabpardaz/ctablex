import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { ContentValue } from '../content/ContentValue';
import { useTableComponents } from '../TableComponentsContext';
import { Accessor } from '../utils/accessor';

interface CellOwnProps<C extends ComponentType, A extends Accessor<any, any>> {
  accessor: A | null;
  TdProps?: Partial<ComponentProps<C>>;
}

export type CellProps<
  C extends ComponentType,
  A extends Accessor<any, any>
> = PropsWithChildren<CellOwnProps<C, A>>;

export function Cell<
  C extends ComponentType = ComponentType,
  A extends Accessor<any, any> = Accessor<any, any>
>(props: CellProps<C, A>) {
  const { accessor, children, TdProps } = props;
  const Components = useTableComponents();
  return (
    <ContentValue accessor={accessor}>
      <Components.Td {...TdProps}>{children}</Components.Td>
    </ContentValue>
  );
}
