import React, { PropsWithChildren } from 'react';
import { CellContextProvider } from './CellContext';
import { useRowDataContext } from './RowDataContext';
import { useTableUIAdapterContext } from './TableUIAdapterContext';
import { getValue } from './utils/getValue';

interface OwnProps<D, C> {
  accessor: string | ((row: D) => C);
}

export type Props<D, C> = PropsWithChildren<OwnProps<D, C>>;
export function Cell<D, C>(props: Props<D, C>) {
  const Adapter = useTableUIAdapterContext();
  const { accessor, children } = props;
  const row = useRowDataContext<D>();
  const value = getValue(row, accessor);
  return (
    <CellContextProvider value={value}>
      <Adapter.td>{children}</Adapter.td>
    </CellContextProvider>
  );
}
