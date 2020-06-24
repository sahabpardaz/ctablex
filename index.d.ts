import { ElementType } from 'react';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';

export declare type Accessor<D, C> = string | ((row: D) => C);

export declare function ArrayOutput<V>(props: Props_18<V>): JSX.Element;

export declare function Cell<D, C>(props: Props_16<D, C>): JSX.Element;

export declare const CellContext: React_2.Context<any>;

export declare function CellContextProvider<V>(props: Props_17<V>): JSX.Element;

export declare type CellContextType<V> = V;

export declare function Column<D, C>(props: Props_4<D, C>): JSX.Element | null;

export declare function Columns(props: Props_3): JSX.Element | null;

export declare namespace Columns {
  var __COLUMNS__: boolean;
}

export declare const ColumnsContext: React_2.Context<React_2.ReactNode>;

export declare function ColumnsContextProvider(props: Props_5): JSX.Element;

export declare type ColumnsContextType = ReactNode;

export declare interface ColumnsType<D extends object = {}> {
  __COLUMNS__: true;
}

export declare const DataContext: React_2.Context<
  DataContextType<any> | undefined
>;

export declare function DataContextProvider<D>(props: Props_2<D>): JSX.Element;

export declare type DataContextType<D> = ReadonlyArray<D>;

export declare function DataTable<D>(props: Props<D>): JSX.Element;

export declare function DefaultCell<D>(props: Props_15<D>): JSX.Element;

export declare function findColumns<D extends object = {}>(
  children: ReactNode,
): ReactElement | null;

export declare function getValue<D, C>(value: D, accessor: ''): null;

export declare function getValue<D, C>(value: D, accessor: Accessor<D, C>): C;

export declare function HeaderCell(props: Props_8): JSX.Element;

export declare function HeaderRow(props: Props_7): JSX.Element;

export declare const IndexContext: React_2.Context<number | undefined>;

export declare function IndexContextProvider(props: Props_20): JSX.Element;

export declare type IndexContextType = number;

export declare function isColumnsType<D extends object = {}>(
  type: any,
): type is ColumnsType<D>;

export declare const ItemContext: React_2.Context<any>;

export declare function ItemContextProvider<V>(props: Props_19<V>): JSX.Element;

export declare type ItemContextType<V> = V;

declare interface OwnProps<D> {
  data?: ReadonlyArray<D>;
}

declare interface OwnProps_10<D> {
  row?: D;
}

declare interface OwnProps_11<V> {
  value: RowDataContextType<V>;
}

declare interface OwnProps_12<D> {
  keyAccessor?: Accessor<D, string | number>;
}

declare interface OwnProps_13 {}

declare interface OwnProps_14 {
  value: TablePartContextType;
}

declare interface OwnProps_15<D> {}

declare interface OwnProps_16<D, C> {
  accessor: string | ((row: D) => C);
}

declare interface OwnProps_17<V> {
  value: CellContextType<V>;
}

declare interface OwnProps_18<V> {
  value: ReadonlyArray<V>;
  getKey?: (value: V, index: number) => string | number;
}

declare interface OwnProps_19<V> {
  value: ItemContextType<V>;
}

declare interface OwnProps_2<D> {
  value: DataContextType<D>;
}

declare interface OwnProps_20 {
  value: IndexContextType;
}

declare interface OwnProps_3 {}

declare interface OwnProps_4<D, C> {
  header?: ReactNode;
  accessor?: string | ((row: D) => C);
}

declare interface OwnProps_5 {
  value: ColumnsContextType;
}

declare interface OwnProps_6 {}

declare interface OwnProps_7 {}

declare interface OwnProps_8 {
  header: ReactNode;
}

declare interface OwnProps_9<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

declare type Props<D> = PropsWithChildren<OwnProps<D>>;

declare type Props_10<D> = PropsWithChildren<OwnProps_10<D>>;

declare type Props_11<V> = PropsWithChildren<OwnProps_11<V>>;

declare type Props_12<D> = PropsWithChildren<OwnProps_12<D>>;

declare type Props_13 = PropsWithChildren<OwnProps_13>;

declare type Props_14 = PropsWithChildren<OwnProps_14>;

declare type Props_15<D> = PropsWithChildren<OwnProps_15<D>>;

declare type Props_16<D, C> = PropsWithChildren<OwnProps_16<D, C>>;

declare type Props_17<V> = PropsWithChildren<OwnProps_17<V>>;

declare type Props_18<V> = PropsWithChildren<OwnProps_18<V>>;

declare type Props_19<V> = PropsWithChildren<OwnProps_19<V>>;

declare type Props_2<D> = PropsWithChildren<OwnProps_2<D>>;

declare type Props_20 = PropsWithChildren<OwnProps_20>;

declare type Props_3 = PropsWithChildren<OwnProps_3>;

declare type Props_4<D, C> = PropsWithChildren<OwnProps_4<D, C>>;

declare type Props_5 = PropsWithChildren<OwnProps_5>;

declare type Props_6 = PropsWithChildren<OwnProps_6>;

declare type Props_7 = PropsWithChildren<OwnProps_7>;

declare type Props_8 = PropsWithChildren<OwnProps_8>;

declare type Props_9<D> = PropsWithChildren<OwnProps_9<D>>;

export declare function Row<D>(props: Props_10<D>): JSX.Element;

export declare const RowDataContext: React_2.Context<any>;

export declare function RowDataContextProvider<V>(
  props: Props_11<V>,
): JSX.Element;

export declare type RowDataContextType<V> = V;

export declare function Rows<D>(props: Props_9<D>): JSX.Element;

export declare function Table(props: Props_13): JSX.Element;

export declare function TableBody<D>(props: Props_12<D>): JSX.Element;

export declare function TableHeader(props: Props_6): JSX.Element;

export declare const TablePartContext: React_2.Context<string | undefined>;

export declare function TablePartContextProvider(props: Props_14): JSX.Element;

export declare type TablePartContextType = TablePartType;

export declare type TablePartType = 'definition' | 'header' | 'body' | string;

export declare interface TableUIAdapterContextType {
  table: ElementType;
  thead: ElementType;
  tbody: ElementType;
  tr: ElementType;
  th: ElementType;
  td: ElementType;
}

export declare function useCellContext<V>(): CellContextType<V>;

export declare function useColumnsContext(): ColumnsContextType;

export declare function useDataContext<D>(
  value?: ReadonlyArray<D>,
): DataContextType<D>;

export declare function useIndexContext(): IndexContextType;

export declare function useItemContext<V>(value?: V): ItemContextType<V>;

export declare function useRowDataContext<V>(): RowDataContextType<V>;

export declare function useTablePartContext(): TablePartContextType;

export {};
