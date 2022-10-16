import React, { PropsWithChildren } from 'react';
import { Accessor } from '../utils/accessor';
import { ContentProvider } from './ContentContext';
import { DefaultContent } from './DefaultContent';
import { useContentValue } from './useContentValue';

interface ContentValueOwnProps<D, C> {
  accessor: Accessor<D, C> | null;
}

export type ContentValueProps<D, C> = PropsWithChildren<
  ContentValueOwnProps<D, C>
>;

const defaultChildren = <DefaultContent />;

export function ContentValue<D, C>(props: ContentValueProps<D, C>) {
  const { accessor, children = defaultChildren } = props;
  const value = useContentValue(accessor);
  return <ContentProvider value={value}>{children}</ContentProvider>;
}
