import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface HeaderCellOwnProps {}

export type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

/**
 * Wraps `header` component with the componrnt for `th`
 *
 * @param props.header - header/title for column
 */
export function HeaderCell(props: HeaderCellProps) {
  const { children } = props;

  const Components = useTableComponentsContext();

  return <Components.Th>{children}</Components.Th>;
}
