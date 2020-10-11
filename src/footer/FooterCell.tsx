import React, { PropsWithChildren } from 'react';
import { useTableComponents } from '../TableComponentsContext';

interface FooterCellOwnProps {}

export type FooterCellProps = PropsWithChildren<FooterCellOwnProps>;

export function FooterCell(props: FooterCellProps) {
  const { children } = props;

  const Components = useTableComponents();

  return <Components.Td>{children}</Components.Td>;
}
