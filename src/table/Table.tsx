import React, { PropsWithChildren } from 'react';
import { useTableUIAdapterContext } from '../TableUIAdapterContext';

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Table(props: Props) {
  const { children } = props;
  const Adapter = useTableUIAdapterContext();
  return <Adapter.table>{children}</Adapter.table>;
}
