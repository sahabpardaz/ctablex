import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { useCurrentValue } from '../array/CurrentValueContext';
import { ChildrenProvider } from '../children/ChildrenContext';
import { Columns } from '../column/Columns';
import { useTableElements } from '../TableElementsContext';
import { addProps } from '../utils/add-props';
import { RowDataProvider } from './RowDataContext';

interface RowOwnProps<D, C extends ComponentType> {
  row?: D;
  TrProps?: Partial<ComponentProps<C>>;
  trEl?: ReactElement;
}

export type RowProps<D, C extends ComponentType> = PropsWithChildren<
  RowOwnProps<D, C>
>;

const defaultChildren = <Columns />;

export function Row<D, C extends ComponentType = ComponentType>(
  props: RowProps<D, C>,
) {
  const { children = defaultChildren } = props;
  const elements = useTableElements();
  const element = addProps(props.trEl ?? elements.tr, props.TrProps, {
    el: 'trEl',
    prop: 'TrProps',
  });

  const row = useCurrentValue<D>(props.row);
  return (
    <RowDataProvider value={row}>
      <ChildrenProvider value={children}>{element}</ChildrenProvider>
    </RowDataProvider>
  );
}
