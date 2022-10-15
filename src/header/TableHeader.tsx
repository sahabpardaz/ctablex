import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { ChildrenProvider } from '../children/ChildrenContext';
import { TablePartProvider } from '../table/TablePartContext';
import { useTableElements } from '../TableElementsContext';
import { addProps } from '../utils/add-props';
import { HeaderRow } from './HeaderRow';

interface TableHeaderOwnProps<C extends ComponentType> {
  TheadProps?: Partial<ComponentProps<C>>;
  theadEl?: ReactElement;
}

export type TableHeaderProps<C extends ComponentType> = PropsWithChildren<
  TableHeaderOwnProps<C>
>;

const defaultChildren = <HeaderRow />;

export function TableHeader<C extends ComponentType = ComponentType>(
  props: TableHeaderProps<C>,
) {
  const { children = defaultChildren } = props;
  const elements = useTableElements();
  const element = addProps(props.theadEl ?? elements.thead, props.TheadProps, {
    el: 'theadEl',
    prop: 'TheadProps',
  });

  return (
    <TablePartProvider value="header">
      <ChildrenProvider value={children}>{element}</ChildrenProvider>
    </TablePartProvider>
  );
}
