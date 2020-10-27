import React, { Fragment, isValidElement, PropsWithChildren } from 'react';
import { useColumns } from './ColumnsContext';

interface UseColumnsOwnProps {
  part?: string;
}

export type UseColumnsProps = PropsWithChildren<UseColumnsOwnProps>;

export function UseColumns(props: UseColumnsProps) {
  const columns = useColumns();

  const partColumns = React.Children.map(columns, (child) => {
    if (isValidElement(child)) {
      if (child.props.part === props.part) {
        return <Fragment>{child.props.children}</Fragment>;
      }
    }
    return null;
  });
  return <Fragment>{partColumns}</Fragment>;
}
