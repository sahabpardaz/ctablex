import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface HeaderCellOwnProps {}

export type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

export function HeaderCell(props: HeaderCellProps) {
  const { children } = props;

  const Components = useTableComponentsContext();

  return <Components.Th>{children}</Components.Th>;
}
