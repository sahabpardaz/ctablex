import React, { Fragment, PropsWithChildren } from 'react';
import { useCellContext } from '../CellContext';

interface OwnProps<D> {}
type Props<D> = PropsWithChildren<OwnProps<D>>;

export function DefaultCell<D>(props: Props<D>) {
  const value = useCellContext<any>();
  return <Fragment>{value}</Fragment>;
}
