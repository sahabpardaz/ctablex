import React, { PropsWithChildren } from 'react';
import { useItemContext } from '../array/ItemContext';
import { useColumnsContext } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';
import { RowDataContextProvider } from './RowDataContext';

interface OwnProps<D> {
  row?: D;
}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function Row<D>(props: Props<D>) {
  const Components = useTableComponentsContext();

  const columns = useColumnsContext();
  const row = useItemContext<D>(props.row);
  return (
    <RowDataContextProvider value={row}>
      <Components.Tr>{columns}</Components.Tr>
    </RowDataContextProvider>
  );
}
