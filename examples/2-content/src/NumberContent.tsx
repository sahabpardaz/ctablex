import { useContent } from '@ctablex/core';
import React, { Fragment, PropsWithChildren } from 'react';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

export function NumberContent(props: Props) {
  const content = useContent<number>();
  const str = formatter.format(content);
  return <Fragment>{str}</Fragment>;
}
