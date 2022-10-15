import React, {
  ComponentProps,
  ComponentType,
  Fragment,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { ChildrenProvider } from '../children/ChildrenContext';
import { TableHeader } from '../header/TableHeader';
import { useTableElements } from '../TableElementsContext';
import { addProps } from '../utils/add-props';
import { TableBody } from './TableBody';

interface TableOwnProps<C extends ComponentType> {
  TableProps?: Partial<ComponentProps<C>>;
  tableEl?: ReactElement;
}

export type TableProps<C extends ComponentType> = PropsWithChildren<
  TableOwnProps<C>
>;
const defaultChildren = (
  <Fragment>
    <TableHeader />
    <TableBody />
  </Fragment>
);
export function Table<C extends ComponentType = ComponentType>(
  props: TableProps<C>,
) {
  const { children = defaultChildren } = props;
  const elements = useTableElements();
  const element = addProps(props.tableEl ?? elements.table, props.TableProps, {
    el: 'tableEl',
    prop: 'TableProps',
  });
  return <ChildrenProvider value={children}>{element}</ChildrenProvider>;
}
