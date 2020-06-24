import React, { PropsWithChildren } from 'react';
import { useColumnsContext } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function HeaderRow(props: Props) {
  const Components = useTableComponentsContext();

  const columns = useColumnsContext();

  return <Components.Tr>{columns}</Components.Tr>;
}
