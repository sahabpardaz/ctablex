import React, { PropsWithChildren } from 'react';
import { ContentValue } from '../content/ContentValue';
import { useTableComponents } from '../TableComponentsContext';
import { Accessor } from '../utils/accessor';

interface CellOwnProps<D, C> {
  accessor: Accessor<D, C> | null;
}

export type CellProps<D, C> = PropsWithChildren<CellOwnProps<D, C>>;

export function Cell<D, C>(props: CellProps<D, C>) {
  const { accessor, children } = props;
  const Components = useTableComponents();
  return (
    <ContentValue accessor={accessor}>
      <Components.Td>{children}</Components.Td>
    </ContentValue>
  );
}
