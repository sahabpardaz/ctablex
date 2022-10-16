import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { ChildrenProvider } from '../children/ChildrenContext';
import { ContentValue } from '../content/ContentValue';
import { useTableElements } from '../TableElementsContext';
import { Accessor } from '../utils/accessor';
import { addProps } from '../utils/add-props';

interface CellOwnProps<C extends ComponentType, A extends Accessor<any, any>> {
  accessor: A | null;
  TdProps?: Partial<ComponentProps<C>>;
  tdEl?: ReactElement;
}

export type CellProps<
  C extends ComponentType,
  A extends Accessor<any, any>,
> = PropsWithChildren<CellOwnProps<C, A>>;

export function Cell<
  C extends ComponentType = ComponentType,
  A extends Accessor<any, any> = Accessor<any, any>,
>(props: CellProps<C, A>) {
  const { accessor, children } = props;
  const elements = useTableElements();
  const element = addProps(props.tdEl ?? elements.td, props.TdProps, {
    el: 'tdEl',
    prop: 'TdProps',
  });
  return (
    <ContentValue accessor={accessor}>
      <ChildrenProvider value={children}>{element}</ChildrenProvider>
    </ContentValue>
  );
}
