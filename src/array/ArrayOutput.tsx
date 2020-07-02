import React, { Fragment, PropsWithChildren } from 'react';
import { IndexContextProvider } from './IndexContext';
import { ItemContextProvider } from './ItemContext';

interface ArrayOutputOwnProps<V> {
  value: ReadonlyArray<V>;
  getKey?: (value: V, index: number) => string | number;
}

export type ArrayOutputProps<V> = PropsWithChildren<ArrayOutputOwnProps<V>>;

const defaultGetKey = (value: any, index: number) => index;

/**
 *
 * `ArrayOutput` renders provided `children` component once for each element in `value`, in order.
 * It provides `ItemContext` and `IndexContext` to `children`, so it acts like Javascript `map` method.
 *
 * @param props.value - Array of elements to iterate through.
 * @param props.getKey - `key` for each item will be calculated based on its value and index. If not provided, `index` will be used as `key`
 */
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
