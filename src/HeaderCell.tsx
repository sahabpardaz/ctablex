import React, { PropsWithChildren, ReactNode } from 'react';
import { useTableUIAdapterContext } from './TableUIAdapterContext';

interface OwnProps {
  header: ReactNode;
}

type Props = PropsWithChildren<OwnProps>;

export function HeaderCell(props: Props) {
  const Adapter = useTableUIAdapterContext();

  return <Adapter.th>{props.header}</Adapter.th>;
}
