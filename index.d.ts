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

export declare type ColumnsContextType = ReactNode;

declare interface ColumnsOwnProps {}

export declare type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

export declare function ColumnsProvider(
  props: ColumnsProviderProps,
): JSX.Element;

declare interface ColumnsProviderOwnProps {
  value: ColumnsContextType;
}

export declare type ColumnsProviderProps = PropsWithChildren<
  ColumnsProviderOwnProps
>;

export declare interface ColumnsType<D extends object = {}> {
  __COLUMNS__: true;
}

export declare const ContentContext: Context<
  ContentContextType<any> | undefined
>;

export declare type ContentContextType<V> = V;

export declare function ContentProvider<V>(
  props: ContentProviderProps<V>,
): JSX.Element;

declare interface ContentProviderOwnProps<V> {
  value: ContentContextType<V>;
}

export declare type ContentProviderProps<V> = PropsWithChildren<
  ContentProviderOwnProps<V>
>;

export declare function ContentValue<D, C>(
  props: ContentValueProps<D, C>,
): JSX.Element;

declare interface ContentValueOwnProps<D, C> {
  accessor: Accessor<D, C> | null;
}

export declare type ContentValueProps<D, C> = PropsWithChildren<
  ContentValueOwnProps<D, C>
>;

export declare const CurrentValueContext: Context<
  CurrentValueContextType<any> | undefined
>;

export declare type CurrentValueContextType<V> = V;

export declare function CurrentValueProvider<V>(
  props: CurrentValueProviderProps<V>,
): JSX.Element;

export declare type CurrentValueProviderProps<V> = PropsWithChildren<
  ItemProviderOwnProps<V>
>;

export declare const DataContext: Context<DataContextType<any> | undefined>;

export declare type DataContextType<D> = ReadonlyArray<D>;

export declare function DataProvider<D>(
  props: DataProviderProps<D>,
): JSX.Element;

declare interface DataProviderOwnProps<D> {
  value: DataContextType<D>;
}

export declare type DataProviderProps<D> = PropsWithChildren<
  DataProviderOwnProps<D>
>;

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

export declare const defaultTableComponents: TableComponentsContextType;

export declare function findColumns<D extends object = {}>(
  children: ReactNode,
): ReactElement | null;

export declare function getValue<D, C>(data: D, accessor: null): null;

export declare function getValue<D, C>(data: D, accessor: Accessor<D, C>): C;

export declare function getValue<D, C>(
  data: D,
  accessor: Accessor<D, C> | null,
): C | null;

export declare function HeaderCell(props: HeaderCellProps): JSX.Element;

declare interface HeaderCellOwnProps {}

export declare type HeaderCellProps = PropsWithChildren<HeaderCellOwnProps>;

export declare function HeaderRow(props: HeaderRowProps): JSX.Element;

declare interface HeaderRowOwnProps {}

export declare type HeaderRowProps = PropsWithChildren<HeaderRowOwnProps>;

export declare const IndexContext: Context<IndexContextType | undefined>;

export declare type IndexContextType = number;

export declare function IndexProvider(props: IndexProviderProps): JSX.Element;

declare interface IndexProviderOwnProps {
  value: IndexContextType;
}

export declare type IndexProviderProps = PropsWithChildren<
  IndexProviderOwnProps
>;

export declare function isColumnsType<D extends object = {}>(
  type: any,
): type is ColumnsType<D>;

declare interface ItemProviderOwnProps<V> {
  value: CurrentValueContextType<V>;
}

export declare function Row<D>(props: RowProps<D>): JSX.Element;

export declare const RowDataContext: Context<
  RowDataContextType<any> | undefined
>;

export declare type RowDataContextType<V> = V;

export declare function RowDataProvider<V>(
  props: RowDataProviderProps<V>,
): JSX.Element;

declare interface RowDataProviderOwnProps<V> {
  value: RowDataContextType<V>;
}

export declare type RowDataProviderProps<V> = PropsWithChildren<
  RowDataProviderOwnProps<V>
>;

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

export declare interface TableComponentsContextType {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}

export declare function TableComponentsProvider(
  props: TableComponentsProviderProps,
): JSX.Element;

declare interface TableComponentsProviderOwnProps {
  value: TableComponentsContextType;
}

export declare type TableComponentsProviderProps = PropsWithChildren<
  TableComponentsProviderOwnProps
>;

export declare function TableHeader(props: TableHeaderProps): JSX.Element;

declare interface TableHeaderOwnProps {}

export declare type TableHeaderProps = PropsWithChildren<TableHeaderOwnProps>;

declare interface TableOwnProps {}

export declare const TablePartContext: Context<
  TablePartContextType | undefined
>;

export declare type TablePartContextType = TablePartType;

export declare function TablePartProvider(
  props: TablePartProviderProps,
): JSX.Element;

declare interface TablePartProviderOwnProps {
  value: TablePartContextType;
}

export declare type TablePartProviderProps = PropsWithChildren<
  TablePartProviderOwnProps
>;

export declare type TablePartType = 'definition' | 'header' | 'body' | string;

export declare type TableProps = PropsWithChildren<TableOwnProps>;

export declare function useColumns(): ColumnsContextType;

export declare function useContent<V>(): ContentContextType<V>;

export declare function useContentValue<D, C>(accessor: null): null;

export declare function useContentValue<D, C>(accessor: Accessor<D, C>): C;

export declare function useContentValue<D, C>(
  accessor: Accessor<D, C> | null,
): C | null;

export declare function useCurrentValue<V>(
  value?: V,
): CurrentValueContextType<V>;

export declare function useData<D>(
  value?: ReadonlyArray<D>,
): DataContextType<D>;

export declare function useIndex(): IndexContextType;

export declare function useRowData<V>(): RowDataContextType<V>;

export declare function useTableComponents(): TableComponentsContextType;

export declare function useTablePart(): TablePartContextType;

export {};
