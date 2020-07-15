import { useContent } from '@ctablex/core';
import React, { Fragment, PropsWithChildren, ReactNode } from 'react';

interface OwnProps {
  yes?: ReactNode;
  no?: ReactNode;
}

export type Props = PropsWithChildren<OwnProps>;

export function BooleanContent(props: Props) {
  const content = useContent<number>();

  return (
    <Fragment>
      {content === true && props.yes}
      {content === false && props.no}
    </Fragment>
  );
}
