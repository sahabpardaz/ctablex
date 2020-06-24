import { ElementType } from 'react';
import { PropsWithChildren } from 'react';
import { ReactNode } from 'react';

declare type Accessor<D, C> = string | ((row: D) => C);

export declare function Column<D, C>(props: Props_3<D, C>): JSX.Element | null;

export declare function Columns(props: Props_2): JSX.Element | null;

export declare namespace Columns {
  var __COLUMNS__: boolean;
}

export declare function DataTable<D>(props: Props<D>): JSX.Element;

export declare function DefaultCell<D>(props: Props_9<D>): JSX.Element;

declare interface OwnProps<D> {
  data?: ReadonlyArray<D>;
}

declare interface OwnProps_2 {}

declare interface OwnProps_3<D, C> {
  header?: ReactNode;
  accessor?: string | ((row: D) => C);
}

declare interface OwnProps_4 {}

declare interface OwnProps_5<D> {
  keyAccessor?: Accessor<D, string | number>;
}

declare interface OwnProps_6 {}

declare interface OwnProps_7<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

declare interface OwnProps_8<D> {
  row?: D;
}

declare interface OwnProps_9<D> {}

declare type Props<D> = PropsWithChildren<OwnProps<D>>;

declare type Props_2 = PropsWithChildren<OwnProps_2>;

declare type Props_3<D, C> = PropsWithChildren<OwnProps_3<D, C>>;

declare type Props_4 = PropsWithChildren<OwnProps_4>;

declare type Props_5<D> = PropsWithChildren<OwnProps_5<D>>;

declare type Props_6 = PropsWithChildren<OwnProps_6>;

declare type Props_7<D> = PropsWithChildren<OwnProps_7<D>>;

declare type Props_8<D> = PropsWithChildren<OwnProps_8<D>>;

declare type Props_9<D> = PropsWithChildren<OwnProps_9<D>>;

export declare function Row<D>(props: Props_8<D>): JSX.Element;

export declare function Rows<D>(props: Props_7<D>): JSX.Element;

export declare function Table(props: Props_4): JSX.Element;

export declare function TableBody<D>(props: Props_5<D>): JSX.Element;

export declare function TableHeader(props: Props_6): JSX.Element;

export declare interface TableUIAdapterContextType {
  table: ElementType;
  thead: ElementType;
  tbody: ElementType;
  tr: ElementType;
  th: ElementType;
  td: ElementType;
}

export {};
