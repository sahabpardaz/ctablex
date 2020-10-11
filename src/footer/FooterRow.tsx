import React, { PropsWithChildren } from 'react';
import { useColumns } from '../column/ColumnsContext';
import { useTableComponents } from '../TableComponentsContext';

interface FooterRowOwnProps {}

export type FooterRowProps = PropsWithChildren<FooterRowOwnProps>;

export function FooterRow(props: FooterRowProps) {
  const Components = useTableComponents();

  const columns = useColumns();

  return <Components.Tr>{columns}</Components.Tr>;
}
