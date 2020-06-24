import React, { Fragment, PropsWithChildren } from 'react';
import { useCellContext } from '../cell/CellContext';

interface OwnProps<D> {}
export type Props<D> = PropsWithChildren<OwnProps<D>>;

export function DefaultCell<D>(props: Props<D>) {
  const value = useCellContext<any>();
  return <Fragment>{value}</Fragment>;
}
