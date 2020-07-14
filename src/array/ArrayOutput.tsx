import React, { Fragment, PropsWithChildren } from 'react';
import { IndexProvider } from './IndexContext';
import { CurrentValueProvider } from './CurrentValueContext';

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
        <CurrentValueProvider value={value} key={getKey(value, index)}>
          <IndexProvider value={index}>{children}</IndexProvider>
        </CurrentValueProvider>
      ))}
    </Fragment>
  );
}
