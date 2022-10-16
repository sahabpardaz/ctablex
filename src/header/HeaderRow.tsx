import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { ChildrenProvider } from '../children/ChildrenContext';
import { Columns } from '../column/Columns';
import { useTableElements } from '../TableElementsContext';
import { addProps } from '../utils/add-props';

interface HeaderRowOwnProps<C extends ComponentType> {
  TrProps?: Partial<ComponentProps<C>>;
  trEl?: ReactElement;
}

export type HeaderRowProps<C extends ComponentType> = PropsWithChildren<
  HeaderRowOwnProps<C>
>;

const defaultChildren = <Columns />;

export function HeaderRow<C extends ComponentType = ComponentType>(
  props: HeaderRowProps<C>,
) {
  const { children = defaultChildren } = props;
  const elements = useTableElements();
  const element = addProps(props.trEl ?? elements.tr, props.TrProps, {
    el: 'trEl',
    prop: 'TrProps',
  });
  return <ChildrenProvider value={children}>{element}</ChildrenProvider>;
}
