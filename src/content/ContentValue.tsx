import React, { PropsWithChildren } from 'react';
import { useRowData } from '../row/RowDataContext';
import { Accessor } from '../types';
import { getValue } from '../utils/getValue';
import { ContentContextProvider } from './ContentContext';
import { DefaultContent } from './DefaultContent';

interface ContentValueOwnProps<D, C> {
  accessor: string | ((row: D) => C);
}

export function useContentValue<D, C>(accessor: Accessor<D, C>) {
  const row = useRowData<D>();
  return getValue(row, accessor);
}

export type ContentValueProps<D, C> = PropsWithChildren<
  ContentValueOwnProps<D, C>
>;
export function ContentValue<D, C>(props: ContentValueProps<D, C>) {
  const { accessor, children = <DefaultContent /> } = props;
  const value = useContentValue(accessor);
  return (
    <ContentContextProvider value={value}>{children}</ContentContextProvider>
  );
}
