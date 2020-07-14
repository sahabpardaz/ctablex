import React, { PropsWithChildren } from 'react';
import { useCurrentValue } from '../array/CurrentValueContext';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponents } from '../TableComponentsContext';
import { RowDataProvider } from './RowDataContext';

interface RowOwnProps<D> {
  row?: D;
}

export type RowProps<D> = PropsWithChildren<RowOwnProps<D>>;

export function Row<D>(props: RowProps<D>) {
  const Components = useTableComponents();

  const columns = useColumns();
  const row = useCurrentValue<D>(props.row);
  return (
    <RowDataProvider value={row}>
      <Components.Tr>{columns}</Components.Tr>
    </RowDataProvider>
  );
}
