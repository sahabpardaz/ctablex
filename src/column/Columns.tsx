import React, { Fragment, PropsWithChildren } from 'react';
import { useTablePart } from '../table/TablePartContext';

interface ColumnsOwnProps {}

export type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

export function Columns(props: ColumnsProps) {
  const { children } = props;
  const part = useTablePart();
  if (part === 'definition') {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}

Columns.__COLUMNS__ = true;
