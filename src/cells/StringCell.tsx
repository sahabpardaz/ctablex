import React, { Fragment, PropsWithChildren } from 'react';
import { useCellContext } from '../CellContext';

interface OwnProps<D> {}
type Props<D> = PropsWithChildren<OwnProps<D>>;

export function StringCell<D>(props: Props<D>) {
  const value = useCellContext<string>();
  return <Fragment>{value}</Fragment>;
}
