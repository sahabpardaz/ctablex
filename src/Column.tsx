import React, { PropsWithChildren, ReactNode } from 'react';
import { Cell } from './Cell';
import { HeaderCell } from './HeaderCell';
import { useTablePartContext } from './TablePartContext';

interface OwnProps<D, C> {
  header?: ReactNode;
  accessor?: string | ((row: D) => C);
}

export type Props<D, C> = PropsWithChildren<OwnProps<D, C>>;

export function Column<D, C>(props: Props<D, C>) {
  const { children = '', accessor = '' } = props;
  const part = useTablePartContext();
  if (part === 'header') {
    return <HeaderCell header={props.header} />;
  }
  if (part === 'body') {
    return <Cell accessor={accessor}>{children}</Cell>;
  }
  return null;
}
