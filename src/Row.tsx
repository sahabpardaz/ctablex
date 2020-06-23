import React, { PropsWithChildren } from 'react';
import { useColumnsContext } from './ColumnsContext';
import { useItemContext } from './ItemContext';
import { RowDataContextProvider } from './RowDataContext';
import { useTableUIAdapterContext } from './TableUIAdapterContext';

interface OwnProps<D> {
  row?: D;
}

type Props<D> = PropsWithChildren<OwnProps<D>>;

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
