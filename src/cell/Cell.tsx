import React, { PropsWithChildren } from 'react';
import { useRowData } from '../row/RowDataContext';
import { useTableComponentsContext } from '../TableComponentsContext';
import { getValue } from '../utils/getValue';
import { ContentContextProvider } from './ContentContext';

interface OwnProps<D, C> {
  accessor: string | ((row: D) => C);
}

export type Props<D, C> = PropsWithChildren<OwnProps<D, C>>;
export function Cell<D, C>(props: Props<D, C>) {
  const Components = useTableComponentsContext();
  const { accessor, children } = props;
  const row = useRowData<D>();
  const value = getValue(row, accessor);
  return (
    <ContentContextProvider value={value}>
      <Components.Td>{children}</Components.Td>
    </ContentContextProvider>
  );
}
