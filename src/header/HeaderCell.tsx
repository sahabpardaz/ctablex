import React, { PropsWithChildren, ReactNode } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface HeaderCellOwnProps {
  header: ReactNode;
}

export type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

/**
 * Wraps `header` component with the componrnt for `th`
 *
 * @param props.header - header/title for column
 */
export function HeaderCell(props: HeaderCellProps) {
  const Components = useTableComponentsContext();

  return <Components.Th>{props.header}</Components.Th>;
}
