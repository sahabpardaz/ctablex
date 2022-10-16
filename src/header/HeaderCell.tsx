import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { ChildrenProvider } from '../children/ChildrenContext';
import { useTableElements } from '../TableElementsContext';
import { addProps } from '../utils/add-props';

interface HeaderCellOwnProps<C extends ComponentType> {
  ThProps?: Partial<ComponentProps<C>>;
  thEl?: ReactElement;
}

export type HeaderCellProps<C extends ComponentType> = PropsWithChildren<
  HeaderCellOwnProps<C>
>;

export function HeaderCell<C extends ComponentType = ComponentType>(
  props: HeaderCellProps<C>,
) {
  const { children } = props;

  const elements = useTableElements();
  const element = addProps(props.thEl ?? elements.th, props.ThProps, {
    el: 'thEl',
    prop: 'ThProps',
  });
  return <ChildrenProvider value={children}>{element}</ChildrenProvider>;
}
