import React, { ReactElement, ReactNode, Fragment } from 'react';
import { isColumnsType } from './ColumnsType';

export function findColumns<D extends object = {}>(
  children: ReactNode,
): ReactElement | null {
  let columnsChildren = React.Children.map(children, (child) => {
    if (
      React.isValidElement<{ children?: ReactNode }>(child) &&
      isColumnsType<D>(child.type)
    ) {
      return child;
    }
    return null;
  });
  return <Fragment>{columnsChildren}</Fragment>;
}
