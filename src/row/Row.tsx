import React, { PropsWithChildren } from 'react';
import { useColumnsContext } from '../column/ColumnsContext';
import { useItemContext } from '../array/ItemContext';
import { RowDataContextProvider } from './RowDataContext';
import { useTableUIAdapterContext } from '../TableUIAdapterContext';

interface OwnProps<D> {
  row?: D;
}

export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function Row<D>(props: Props<D>) {
  const Adapter = useTableUIAdapterContext();

  const columns = useColumnsContext();
  const row = useItemContext<D>(props.row);
  return (
    <RowDataContextProvider value={row}>
      <Adapter.tr>{columns}</Adapter.tr>
    </RowDataContextProvider>
  );
}
