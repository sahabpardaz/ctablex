import React from 'react';
import { ComponentType, ReactNode } from 'react';
import { getDisplayName } from '../utils/get-display-name';
import { Children } from './Children';

const defaultChildren = <Children />;

export function withDefaultChildren<
  TProps extends { children?: ReactNode },
  C extends ComponentType<TProps> | keyof JSX.IntrinsicElements,
>(Cmp: C): ComponentType<TProps> {
  function WithDefaultChildren(props: TProps) {
    const { children = defaultChildren, ...rest } = props;
    return <Cmp {...(rest as any)}>{children}</Cmp>;
  }
  WithDefaultChildren.displayName = `WithDefaultChildren(${getDisplayName(
    Cmp,
  )})`;
  return WithDefaultChildren as ComponentType<TProps>;
}
