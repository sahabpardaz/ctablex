import React, { PropsWithChildren } from 'react';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponents } from '../TableComponentsContext';

interface HeaderRowOwnProps {}

export type HeaderRowProps = PropsWithChildren<HeaderRowOwnProps>;

export function HeaderRow(props: HeaderRowProps) {
  const Components = useTableComponents();

  const columns = useColumns();

  return <Components.Tr>{columns}</Components.Tr>;
}
