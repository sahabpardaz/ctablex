import React from 'react';
import { useChildren } from './ChildrenContext';

interface ChildrenOwnProps {}

export type ChildrenProps = ChildrenOwnProps;

export function Children(props: ChildrenProps) {
  const children = useChildren();
  return <>{children}</>;
}
