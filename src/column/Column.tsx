import React, {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactElement,
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
  A extends Accessor<any, any>,
> {
  header?: ReactNode;
  accessor?: A | null;
  TdProps?: Partial<ComponentProps<C>>;
  ThProps?: Partial<ComponentProps<H>>;
  tdEl?: ReactElement;
  thEl?: ReactElement;
}

export type ColumnProps<
  C extends ComponentType,
  H extends ComponentType,
  A extends Accessor<any, any>,
> = PropsWithChildren<ColumnOwnProps<C, H, A>>;

const defaultChildren = <DefaultContent />;

export function Column<
  C extends ComponentType = ComponentType,
  H extends ComponentType = ComponentType,
  A extends Accessor<any, any> = Accessor<any, any>,
>(props: ColumnProps<C, H, A>) {
  const {
    children = defaultChildren,
    accessor = null,
    header,
    ThProps,
    TdProps,
    tdEl,
    thEl,
  } = props;
  const part = useTablePart();
  if (part === 'header') {
    return (
      <HeaderCell ThProps={ThProps} thEl={thEl}>
        {header}
      </HeaderCell>
    );
  }
  return (
    <Cell TdProps={TdProps} tdEl={tdEl} accessor={accessor}>
      {children}
    </Cell>
  );
}
