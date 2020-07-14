import React, { PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';

interface TableOwnProps {}

export type TableProps = PropsWithChildren<TableOwnProps>;

export function Table(props: TableProps) {
  const { children } = props;
  const Components = useTableComponents();
  return <Components.Table>{children}</Components.Table>;
}
