import React, { PropsWithChildren } from 'react';
import { Accessor } from '../utils/accessor';
import { useContentValue } from './useContentValue';
import { ContentContextProvider } from './ContentContext';
import { DefaultContent } from './DefaultContent';

interface ContentValueOwnProps<D, C> {
  accessor: Accessor<D, C> | null;
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
