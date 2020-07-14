import React, { PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';

interface HeaderCellOwnProps {}

export type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

export function HeaderCell(props: HeaderCellProps) {
  const { children } = props;

  const Components = useTableComponents();

  return <Components.Th>{children}</Components.Th>;
}
