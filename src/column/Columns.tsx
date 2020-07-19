import React, { Fragment, PropsWithChildren } from 'react';
import { useTablePart } from '../table/TablePartContext';

interface ColumnsOwnProps {
  part?: string;
}

export type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

export function Columns(props: ColumnsProps) {
  const { children, part } = props;
  const currentPart = useTablePart();
  if (
    part === undefined &&
    currentPart !== 'header' &&
    currentPart !== 'body'
  ) {
    return null;
  }
  if (part !== undefined && currentPart !== part) {
    return null;
  }
  return <Fragment>{children}</Fragment>;
}

Columns.__COLUMNS__ = true;
