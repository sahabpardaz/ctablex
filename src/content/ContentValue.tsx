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

/**
 * Provides `value` based on the `accessor` given and the row it is being used in.
 *
 * @param props.accessor - Specifies which field should be provided as content.
 */
export function ContentValue<D, C>(props: ContentValueProps<D, C>) {
  const { accessor, children = <DefaultContent /> } = props;
  const value = useContentValue(accessor);
  return (
    <ContentContextProvider value={value}>{children}</ContentContextProvider>
  );
}
