import React, { Fragment, PropsWithChildren } from 'react';
import { useTablePartContext } from '../table/TablePartContext';

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Columns(props: Props) {
  const { children } = props;
  const part = useTablePartContext();
  if (part === 'definition') {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}

Columns.__COLUMNS__ = true;
