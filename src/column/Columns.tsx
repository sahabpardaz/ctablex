import React, { Fragment, PropsWithChildren } from 'react';
import { useTablePart } from '../table/TablePartContext';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function Columns(props: Props) {
  const { children } = props;
  const part = useTablePart();
  if (part === 'definition') {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}

Columns.__COLUMNS__ = true;
