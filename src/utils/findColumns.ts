import React, { ReactElement, ReactNode } from 'react';
import { isColumnsType } from './ColumnsType';

export function findColumns<D extends object = {}>(
  children: ReactNode,
): ReactElement | null {
  let columnsChild: ReactElement | null = null;
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement<{ children?: ReactNode }>(child) &&
      isColumnsType<D>(child.type)
    ) {
      columnsChild = child;
    }
  });
  return columnsChild;
}
