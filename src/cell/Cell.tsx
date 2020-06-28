import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';
import { ContentValue } from '../content/ContentValue';

interface CellOwnProps<D, C> {
  accessor: string | ((row: D) => C);
}

export type CellProps<D, C> = PropsWithChildren<CellOwnProps<D, C>>;
export function Cell<D, C>(props: CellProps<D, C>) {
  const Components = useTableComponentsContext();
  const { accessor, children } = props;
  return (
    <ContentValue accessor={accessor}>
      <Components.Td>{children}</Components.Td>
    </ContentValue>
  );
}
