import React, { PropsWithChildren } from 'react';
import { useColumnsContext } from '../column/ColumnsContext';
import { useTableComponentsContext } from '../TableComponentsContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function HeaderRow(props: Props) {
  const Adapter = useTableComponentsContext();

  const columns = useColumnsContext();

  return <Adapter.tr>{columns}</Adapter.tr>;
}
