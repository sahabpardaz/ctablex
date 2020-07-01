import { Context } from 'react';
import { ElementType } from 'react';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';

export declare type Accessor<D, C> = string | ((row: D) => C);

export declare function ArrayOutput<V>(props: ArrayOutputProps<V>): JSX.Element;

declare interface ArrayOutputOwnProps<V> {
  value: ReadonlyArray<V>;
  getKey?: (value: V, index: number) => string | number;
}

export declare type ArrayOutputProps<V> = PropsWithChildren<
  ArrayOutputOwnProps<V>
>;

export declare function Cell<D, C>(props: CellProps<D, C>): JSX.Element;

declare interface CellOwnProps<D, C> {
  accessor: Accessor<D, C> | null;
}

export declare type CellProps<D, C> = PropsWithChildren<CellOwnProps<D, C>>;

export declare function Column<D, C>(
  props: ColumnProps<D, C>,
): JSX.Element | null;

declare interface ColumnOwnProps<D, C> {
  header?: ReactNode;
  accessor?: Accessor<D, C> | null;
}

export declare type ColumnProps<D, C> = PropsWithChildren<ColumnOwnProps<D, C>>;

export declare function Columns(props: ColumnsProps): JSX.Element | null;

export declare namespace Columns {
  var __COLUMNS__: boolean;
}

export declare const ColumnsContext: Context<ColumnsContextType | undefined>;

export declare function ColumnsContextProvider(
  props: ColumnsContextProviderProps,
): JSX.Element;

declare interface ColumnsContextProviderOwnProps {
  value: ColumnsContextType;
}

export declare type ColumnsContextProviderProps = PropsWithChildren<
  ColumnsContextProviderOwnProps
>;

export declare type ColumnsContextType = ReactNode;

declare interface ColumnsOwnProps {}

export declare type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

export declare interface ColumnsType<D extends object = {}> {
  __COLUMNS__: true;
}

export declare const ContentContext: Context<
  ContentContextType<any> | undefined
>;

export declare function ContentContextProvider<V>(
  props: ContentContextProviderProps<V>,
): JSX.Element;

declare interface ContentContextProviderOwnProps<V> {
  value: ContentContextType<V>;
}

export declare type ContentContextProviderProps<V> = PropsWithChildren<
  ContentContextProviderOwnProps<V>
>;

export declare type ContentContextType<V> = V;

export declare function ContentValue<D, C>(
  props: ContentValueProps<D, C>,
): JSX.Element;

declare interface ContentValueOwnProps<D, C> {
  accessor: Accessor<D, C> | null;
}

export declare type ContentValueProps<D, C> = PropsWithChildren<
  ContentValueOwnProps<D, C>
>;

export declare const DataContext: Context<DataContextType<any> | undefined>;

export declare function DataContextProvider<D>(
  props: DataContextProviderProps<D>,
): JSX.Element;

declare interface DataContextProviderOwnProps<D> {
  value: DataContextType<D>;
}

export declare type DataContextProviderProps<D> = PropsWithChildren<
  DataContextProviderOwnProps<D>
>;

export declare type DataContextType<D> = ReadonlyArray<D>;

export declare function DataTable<D>(props: DataTableProps<D>): JSX.Element;

declare interface DataTableOwnProps<D> {
  data?: ReadonlyArray<D>;
}

export declare type DataTableProps<D> = PropsWithChildren<DataTableOwnProps<D>>;

export declare function DefaultContent<D>(
  props: DefaultContentProps<D>,
): JSX.Element;

declare interface DefaultContentOwnProps<D> {}

export declare type DefaultContentProps<D> = PropsWithChildren<
  DefaultContentOwnProps<D>
>;

export declare function findColumns<D extends object = {}>(
  children: ReactNode,
): ReactElement | null;

export declare function getValue<D, C>(value: D, accessor: null): null;

export declare function getValue<D, C>(value: D, accessor: Accessor<D, C>): C;

export declare function getValue<D, C>(
  value: D,
  accessor: Accessor<D, C> | null,
): C | null;

export declare function HeaderCell(props: HeaderCellProps): JSX.Element;

declare interface HeaderCellOwnProps {
  header: ReactNode;
}

export declare type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

export declare function HeaderRow(props: HeaderRowProps): JSX.Element;

declare interface HeaderRowOwnProps {}

export declare type HeaderRowProps = PropsWithChildren<HeaderRowOwnProps>;

export declare const IndexContext: Context<IndexContextType | undefined>;

export declare function IndexContextProvider(
  props: IndexContextProviderProps,
): JSX.Element;

declare interface IndexContextProviderOwnProps {
  value: IndexContextType;
}

export declare type IndexContextProviderProps = PropsWithChildren<
  IndexContextProviderOwnProps
>;

export declare type IndexContextType = number;

export declare function isColumnsType<D extends object = {}>(
  type: any,
): type is ColumnsType<D>;

export declare const ItemContext: Context<ItemContextType<any> | undefined>;

export declare function ItemContextProvider<V>(
  props: ItemContextProviderProps<V>,
): JSX.Element;

declare interface ItemContextProviderOwnProps<V> {
  value: ItemContextType<V>;
}

export declare type ItemContextProviderProps<V> = PropsWithChildren<
  ItemContextProviderOwnProps<V>
>;

export declare type ItemContextType<V> = V;

export declare function Row<D>(props: RowProps<D>): JSX.Element;

export declare const RowDataContext: Context<
  RowDataContextType<any> | undefined
>;

export declare function RowDataContextProvider<V>(
  props: RowDataContextProviderProps<V>,
): JSX.Element;

declare interface RowDataContextProviderOwnProps<V> {
  value: RowDataContextType<V>;
}

export declare type RowDataContextProviderProps<V> = PropsWithChildren<
  RowDataContextProviderOwnProps<V>
>;

export declare type RowDataContextType<V> = V;

declare interface RowOwnProps<D> {
  row?: D;
}

export declare type RowProps<D> = PropsWithChildren<RowOwnProps<D>>;

export declare function Rows<D>(props: RowsProps<D>): JSX.Element;

declare interface RowsOwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

export declare type RowsProps<D> = PropsWithChildren<RowsOwnProps<D>>;

export declare function Table(props: TableProps): JSX.Element;

export declare function TableBody<D>(props: TableBodyProps<D>): JSX.Element;

declare interface TableBodyOwnProps<D> {}

export declare type TableBodyProps<D> = PropsWithChildren<TableBodyOwnProps<D>>;

export declare const TableComponentsContext: Context<TableComponentsContextType>;

export declare function TableComponentsContextProvider(
  props: TableComponentsContextProviderProps,
): JSX.Element;

declare interface TableComponentsContextProviderOwnProps {
  value: Partial<TableComponentsContextType>;
}

export declare type TableComponentsContextProviderProps = PropsWithChildren<
  TableComponentsContextProviderOwnProps
>;

export declare interface TableComponentsContextType {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}

export declare function TableHeader(props: TableHeaderProps): JSX.Element;

declare interface TableHeaderOwnProps {}

export declare type TableHeaderProps = PropsWithChildren<TableHeaderOwnProps>;

declare interface TableOwnProps {}

export declare const TablePartContext: Context<
  TablePartContextType | undefined
>;

export declare function TablePartContextProvider(
  props: TablePartContextProviderProps,
): JSX.Element;

declare interface TablePartContextProviderOwnProps {
  value: TablePartContextType;
}

export declare type TablePartContextProviderProps = PropsWithChildren<
  TablePartContextProviderOwnProps
>;

export declare type TablePartContextType = TablePartType;

export declare type TablePartType = 'definition' | 'header' | 'body' | string;

export declare type TableProps = PropsWithChildren<TableOwnProps>;

export declare function useColumns(): ColumnsContextType;

export declare function useContent<V>(): ContentContextType<V>;

export declare function useContentValue<D, C>(accessor: null): null;

export declare function useContentValue<D, C>(accessor: Accessor<D, C>): C;

export declare function useContentValue<D, C>(
  accessor: Accessor<D, C> | null,
): C | null;

export declare function useData<D>(
  value?: ReadonlyArray<D>,
): DataContextType<D>;

export declare function useIndex(): IndexContextType;

export declare function useItem<V>(value?: V): ItemContextType<V>;

export declare function useRowData<V>(): RowDataContextType<V>;

export declare function useTableComponentsContext(): TableComponentsContextType;

export declare function useTablePart(): TablePartContextType;

export {};
