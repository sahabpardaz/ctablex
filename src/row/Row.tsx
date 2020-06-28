import React, { PropsWithChildren } from 'react';
import { useItem } from '../array/ItemContext';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';
import { RowDataContextProvider } from './RowDataContext';

interface OwnProps<D> {
  row?: D;
}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function Row<D>(props: Props<D>) {
  const Components = useTableComponentsContext();

  const columns = useColumns();
  const row = useItem<D>(props.row);
  return (
    <RowDataContextProvider value={row}>
      <Components.Tr>{columns}</Components.Tr>
    </RowDataContextProvider>
  );
}
