import React, { PropsWithChildren, ReactNode } from 'react';
import { DefaultContent } from '..';
import { Cell } from '../cell/Cell';
import { HeaderCell } from '../header/HeaderCell';
import { useTablePart } from '../table/TablePartContext';
import { Accessor } from '../utils/accessor';

interface ColumnOwnProps<D, C> {
  header?: ReactNode;
  accessor?: Accessor<D, C> | null;
}

export type ColumnProps<D, C> = PropsWithChildren<ColumnOwnProps<D, C>>;

export function Column<D, C>(props: ColumnProps<D, C>) {
  const { children = <DefaultContent />, accessor = null, header } = props;
  const part = useTablePart();
  if (part === 'header') {
    return <HeaderCell>{header}</HeaderCell>;
  }
  if (part === 'body') {
    return <Cell accessor={accessor}>{children}</Cell>;
  }
  return null;
}
