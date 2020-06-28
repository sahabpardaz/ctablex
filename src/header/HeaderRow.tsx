import React, { PropsWithChildren } from 'react';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function HeaderRow(props: Props) {
  const Components = useTableComponentsContext();

  const columns = useColumns();

  return <Components.Tr>{columns}</Components.Tr>;
}
