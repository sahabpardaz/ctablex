import React, { Fragment, PropsWithChildren } from 'react';
import { useContent } from './ContentContext';

interface DefaultContentOwnProps<D> {}
export type DefaultContentProps<D> = PropsWithChildren<
  DefaultContentOwnProps<D>
>;

export function DefaultContent<D>(props: DefaultContentProps<D>) {
  const value = useContent<any>();
  return <Fragment>{value}</Fragment>;
}
