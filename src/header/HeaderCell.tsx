import React, { PropsWithChildren, ReactNode } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {
  header: ReactNode;
}

export type Props = PropsWithChildren<OwnProps>;

export function HeaderCell(props: Props) {
  const Components = useTableComponentsContext();

  return <Components.Th>{props.header}</Components.Th>;
}
