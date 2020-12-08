import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  Fragment,
} from 'react';
import { TableHeader } from '../header/TableHeader';
import { useTableComponents } from '../TableComponentsContext';
import { TableBody } from './TableBody';

interface TableOwnProps<C extends ComponentType> {
  TableProps?: Partial<ComponentProps<C>>;
}

export type TableProps<C extends ComponentType> = PropsWithChildren<
  TableOwnProps<C>
>;

export function Table<C extends ComponentType = ComponentType>(
  props: TableProps<C>,
) {
  const defaultChildren = (
    <Fragment>
      <TableHeader />
      <TableBody />
    </Fragment>
  );
  const { children = defaultChildren, TableProps } = props;
  const Components = useTableComponents();
  return <Components.Table {...TableProps}>{children}</Components.Table>;
}
