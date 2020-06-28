import { Context } from 'react';
import { ElementType } from 'react';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';

export declare type Accessor<D, C> = string | ((row: D) => C);

export declare function ArrayOutput<V>(props: Props_19<V>): JSX.Element;

export declare function Cell<D, C>(props: Props_17<D, C>): JSX.Element;

export declare const CellContext: Context<CellContextType<any> | undefined>;

export declare function CellContextProvider<V>(props: Props_18<V>): JSX.Element;

export declare type CellContextType<V> = V;

export declare function Column<D, C>(props: Props_5<D, C>): JSX.Element | null;

export declare function Columns(props: Props_4): JSX.Element | null;

export declare namespace Columns {
  var __COLUMNS__: boolean;
}

export declare const ColumnsContext: Context<ColumnsContextType | undefined>;

export declare function ColumnsContextProvider(props: Props_6): JSX.Element;

export declare type ColumnsContextType = ReactNode;

export declare interface ColumnsType<D extends object = {}> {
  __COLUMNS__: true;
}

export declare const DataContext: Context<DataContextType<any> | undefined>;

export declare function DataContextProvider<D>(props: Props_3<D>): JSX.Element;

export declare type DataContextType<D> = ReadonlyArray<D>;

export declare function DataTable<D>(props: Props<D>): JSX.Element;

export declare function DefaultCell<D>(props: Props_16<D>): JSX.Element;

export declare function findColumns<D extends object = {}>(
  children: ReactNode,
): ReactElement | null;

export declare function getValue<D, C>(value: D, accessor: ''): null;

export declare function getValue<D, C>(value: D, accessor: Accessor<D, C>): C;

export declare function HeaderCell(props: Props_9): JSX.Element;

export declare function HeaderRow(props: Props_8): JSX.Element;

export declare const IndexContext: Context<IndexContextType | undefined>;

export declare function IndexContextProvider(props: Props_21): JSX.Element;

export declare type IndexContextType = number;

export declare function isColumnsType<D extends object = {}>(
  type: any,
): type is ColumnsType<D>;

export declare const ItemContext: Context<ItemContextType<any> | undefined>;

export declare function ItemContextProvider<V>(props: Props_20<V>): JSX.Element;

export declare type ItemContextType<V> = V;

declare interface OwnProps<D> {
  data?: ReadonlyArray<D>;
}

declare interface OwnProps_10<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

declare interface OwnProps_11<D> {
  row?: D;
}

declare interface OwnProps_12<V> {
  value: RowDataContextType<V>;
}

declare interface OwnProps_13<D> {}

declare interface OwnProps_14 {}

declare interface OwnProps_15 {
  value: TablePartContextType;
}

declare interface OwnProps_16<D> {}

declare interface OwnProps_17<D, C> {
  accessor: string | ((row: D) => C);
}

declare interface OwnProps_18<V> {
  value: CellContextType<V>;
}

declare interface OwnProps_19<V> {
  value: ReadonlyArray<V>;
  getKey?: (value: V, index: number) => string | number;
}

declare interface OwnProps_2 {
  value: Partial<TableComponentsContextType>;
}

declare interface OwnProps_20<V> {
  value: ItemContextType<V>;
}

declare interface OwnProps_21 {
  value: IndexContextType;
}

declare interface OwnProps_3<D> {
  value: DataContextType<D>;
}

declare interface OwnProps_4 {}

declare interface OwnProps_5<D, C> {
  header?: ReactNode;
  accessor?: string | ((row: D) => C);
}

declare interface OwnProps_6 {
  value: ColumnsContextType;
}

declare interface OwnProps_7 {}

declare interface OwnProps_8 {}

declare interface OwnProps_9 {
  header: ReactNode;
}

declare type Props<D> = PropsWithChildren<OwnProps<D>>;

declare type Props_10<D> = PropsWithChildren<OwnProps_10<D>>;

declare type Props_11<D> = PropsWithChildren<OwnProps_11<D>>;

declare type Props_12<V> = PropsWithChildren<OwnProps_12<V>>;

declare type Props_13<D> = PropsWithChildren<OwnProps_13<D>>;

declare type Props_14 = PropsWithChildren<OwnProps_14>;

declare type Props_15 = PropsWithChildren<OwnProps_15>;

declare type Props_16<D> = PropsWithChildren<OwnProps_16<D>>;

declare type Props_17<D, C> = PropsWithChildren<OwnProps_17<D, C>>;

declare type Props_18<V> = PropsWithChildren<OwnProps_18<V>>;

declare type Props_19<V> = PropsWithChildren<OwnProps_19<V>>;

declare type Props_2 = PropsWithChildren<OwnProps_2>;

declare type Props_20<V> = PropsWithChildren<OwnProps_20<V>>;

declare type Props_21 = PropsWithChildren<OwnProps_21>;

declare type Props_3<D> = PropsWithChildren<OwnProps_3<D>>;

declare type Props_4 = PropsWithChildren<OwnProps_4>;

declare type Props_5<D, C> = PropsWithChildren<OwnProps_5<D, C>>;

declare type Props_6 = PropsWithChildren<OwnProps_6>;

declare type Props_7 = PropsWithChildren<OwnProps_7>;

declare type Props_8 = PropsWithChildren<OwnProps_8>;

declare type Props_9 = PropsWithChildren<OwnProps_9>;

export declare function Row<D>(props: Props_11<D>): JSX.Element;

export declare const RowDataContext: Context<
  RowDataContextType<any> | undefined
>;

export declare function RowDataContextProvider<V>(
  props: Props_12<V>,
): JSX.Element;

export declare type RowDataContextType<V> = V;

export declare function Rows<D>(props: Props_10<D>): JSX.Element;

export declare function Table(props: Props_14): JSX.Element;

export declare function TableBody<D>(props: Props_13<D>): JSX.Element;

export declare const TableComponentsContext: Context<TableComponentsContextType>;

export declare function TableComponentsContextProvider(
  props: Props_2,
): JSX.Element;

export declare interface TableComponentsContextType {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}

export declare function TableHeader(props: Props_7): JSX.Element;

export declare const TablePartContext: Context<
  TablePartContextType | undefined
>;

export declare function TablePartContextProvider(props: Props_15): JSX.Element;

export declare type TablePartContextType = TablePartType;

export declare type TablePartType = 'definition' | 'header' | 'body' | string;

export declare function useCell<V>(): CellContextType<V>;

export declare function useColumns(): ColumnsContextType;

export declare function useData<D>(
  value?: ReadonlyArray<D>,
): DataContextType<D>;

export declare function useIndex(): IndexContextType;

export declare function useItem<V>(value?: V): ItemContextType<V>;

export declare function useRowData<V>(): RowDataContextType<V>;

export declare function useTableComponentsContext(): TableComponentsContextType;

export declare function useTablePart(): TablePartContextType;

export {};
