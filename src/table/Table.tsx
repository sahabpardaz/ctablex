import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface TableOwnProps {}

export type TableProps = PropsWithChildren<TableOwnProps>;

export function Table(props: TableProps) {
  const { children } = props;
  const Components = useTableComponentsContext();
  return <Components.Table>{children}</Components.Table>;
}
