import React, { PropsWithChildren } from 'react';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface HeaderRowOwnProps {}

export type HeaderRowProps = PropsWithChildren<HeaderRowOwnProps>;

export function HeaderRow(props: HeaderRowProps) {
  const Components = useTableComponentsContext();

  const columns = useColumns();

  return <Components.Tr>{columns}</Components.Tr>;
}
