import React, { Fragment, PropsWithChildren } from 'react';
import { IndexContextProvider } from './IndexContext';
import { ItemContextProvider } from './ItemContext';

interface ArrayOutputOwnProps<V> {
  value: ReadonlyArray<V>;
  getKey?: (value: V, index: number) => string | number;
}

export type ArrayOutputProps<V> = PropsWithChildren<ArrayOutputOwnProps<V>>;

const defaultGetKey = (value: any, index: number) => index;

export function ArrayOutput<V>(props: ArrayOutputProps<V>) {
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
