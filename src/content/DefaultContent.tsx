import React, { Fragment, PropsWithChildren } from 'react';
import { useContent } from './ContentContext';

interface DefaultContentOwnProps<D> {}

export type DefaultContentProps<D> = PropsWithChildren<
  DefaultContentOwnProps<D>
>;

/**
 * Displays the value of cell as it is.
 */
export function DefaultContent<D>(props: DefaultContentProps<D>) {
  const value = useContent<any>();
  return <Fragment>{value}</Fragment>;
}
