import React, { Fragment, PropsWithChildren } from 'react';
import { IndexContextProvider } from './IndexContext';
import { ItemContextProvider } from './ItemContext';

interface OwnProps<V> {
  value: ReadonlyArray<V>;
  getKey?: (value: V, index: number) => string | number;
}

export type Props<V> = PropsWithChildren<OwnProps<V>>;

const defaultGetKey = (value: any, index: number) => index;

export function ArrayOutput<V>(props: Props<V>) {
  const { value: values, children, getKey = defaultGetKey } = props;
  return (
    <Fragment>
      {values.map((value, index) => (
        <ItemContextProvider value={value} key={getKey(value, index)}>
          <IndexContextProvider value={index}>{children}</IndexContextProvider>
        </ItemContextProvider>
      ))}
    </Fragment>
  );
}
