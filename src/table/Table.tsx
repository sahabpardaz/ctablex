import React, { PropsWithChildren } from 'react';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function Table(props: Props) {
  const { children } = props;
  const Components = useTableComponentsContext();
  return <Components.Table>{children}</Components.Table>;
}
