import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { Cell } from '../cell/Cell';
import { DefaultContent } from '../content/DefaultContent';
import { HeaderCell } from '../header/HeaderCell';
import { useTablePart } from '../table/TablePartContext';
import { Accessor } from '../utils/accessor';

interface ColumnOwnProps<
  C extends ComponentType,
  H extends ComponentType,
  A extends Accessor<any, any>
> {
  header?: ReactNode;
  accessor?: A | null;
  TdProps?: Partial<ComponentProps<C>>;
  ThProps?: Partial<ComponentProps<H>>;
}

export type ColumnProps<
  C extends ComponentType,
  H extends ComponentType,
  A extends Accessor<any, any>
> = PropsWithChildren<ColumnOwnProps<C, H, A>>;

export function Column<
  C extends ComponentType = ComponentType,
  H extends ComponentType = ComponentType,
  A extends Accessor<any, any> = Accessor<any, any>
>(props: ColumnProps<C, H, A>) {
  const {
    children = <DefaultContent />,
    accessor = null,
    header,
    ThProps,
    TdProps,
  } = props;
  const part = useTablePart();
  if (part === 'header') {
    return <HeaderCell ThProps={ThProps}>{header}</HeaderCell>;
  }
  return (
    <Cell TdProps={TdProps} accessor={accessor}>
      {children}
    </Cell>
  );
}
