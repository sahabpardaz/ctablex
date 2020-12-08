import React, { PropsWithChildren } from 'react';
import { useTablePart } from '../table/TablePartContext';
import { UseColumns } from './UseColumns';

interface ColumnsOwnProps {
  part?: string;
}

export type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

export function Columns(props: ColumnsProps) {
  const currentPart = useTablePart();
  const { part } = props;
  if (currentPart === 'definition') {
    return null;
  }
  return <UseColumns part={part} />;
}

Columns.__COLUMNS__ = true;
