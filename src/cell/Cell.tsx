import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';
import { ContentValue } from '../content/ContentValue';

interface OwnProps<D, C> {
  accessor: string | ((row: D) => C);
}

export type Props<D, C> = PropsWithChildren<OwnProps<D, C>>;
export function Cell<D, C>(props: Props<D, C>) {
  const Components = useTableComponentsContext();
  const { accessor, children } = props;
  return (
    <ContentValue accessor={accessor}>
      <Components.Td>{children}</Components.Td>
    </ContentValue>
  );
}
