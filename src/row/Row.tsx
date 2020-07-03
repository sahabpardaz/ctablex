import React, { PropsWithChildren } from 'react';
import { useItem } from '../array/ItemContext';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';
import { RowDataContextProvider } from './RowDataContext';

interface RowOwnProps<D> {
  row?: D;
}

export type RowProps<D> = PropsWithChildren<RowOwnProps<D>>;

/**
 * Wraps `columns` with the component for `tr` and provides `RowDataContext`
 *
 * @param props.row - Provide `row` prop for custom rows
 */
export function Row<D>(props: RowProps<D>) {
  const Components = useTableComponentsContext();

  const columns = useColumns();
  const row = useItem<D>(props.row);
  return (
    <RowDataContextProvider value={row}>
      <Components.Tr>{columns}</Components.Tr>
    </RowDataContextProvider>
  );
}
