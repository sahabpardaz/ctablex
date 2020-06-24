import React, { PropsWithChildren } from 'react';
import { useColumnsContext } from '../column/ColumnsContext';
import { useTableUIAdapterContext } from '../TableUIAdapterContext';

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function HeaderRow(props: Props) {
  const Adapter = useTableUIAdapterContext();

  const columns = useColumnsContext();

  return <Adapter.tr>{columns}</Adapter.tr>;
}
