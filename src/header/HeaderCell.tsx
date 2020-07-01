import React, { PropsWithChildren, ReactNode } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface HeaderCellOwnProps {
  header: ReactNode;
}

export type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

export function HeaderCell(props: HeaderCellProps) {
  const Components = useTableComponentsContext();

  return <Components.Th>{props.header}</Components.Th>;
}
