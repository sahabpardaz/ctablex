import React, { Fragment, PropsWithChildren } from 'react';
import { useContent } from '../cell/ContentContext';

interface OwnProps<D> {}
export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function DefaultCell<D>(props: Props<D>) {
  const value = useContent<any>();
  return <Fragment>{value}</Fragment>;
}
