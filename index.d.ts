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

export declare function Column<D, C>(props: ColumnProps<D, C>): JSX.Element;

declare interface ColumnOwnProps<D, C> {
  header?: ReactNode;
  accessor?: Accessor<D, C> | null;
}

export declare type ColumnProps<D, C> = PropsWithChildren<ColumnOwnProps<D, C>>;

export declare function Columns(props: ColumnsProps): JSX.Element | null;

export declare namespace Columns {
  var __COLUMNS__: boolean;
}

export declare const ColumnsContext: Context<ColumnsNode | undefined>;

export declare type ColumnsNode = ReactNode;

declare interface ColumnsOwnProps {
  part?: string;
}

export declare type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

export declare function ColumnsProvider(
  props: ColumnsProviderProps,
): JSX.Element;

declare interface ColumnsProviderOwnProps {
  value: ColumnsNode;
}

export declare type ColumnsProviderProps = PropsWithChildren<
  ColumnsProviderOwnProps
>;

export declare interface ColumnsType<D extends object = {}> {
  __COLUMNS__: true;
}

export declare type Content<V> = V;

export declare const ContentContext: Context<Content<any> | undefined>;

export declare function ContentProvider<V>(
  props: ContentProviderProps<V>,
): JSX.Element;

declare interface ContentProviderOwnProps<V> {
  value: Content<V>;
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

export declare type CurrentValue<V> = V;

export declare const CurrentValueContext: Context<
  CurrentValue<any> | undefined
>;

export declare function CurrentValueProvider<V>(
  props: CurrentValueProviderProps<V>,
): JSX.Element;

export declare type CurrentValueProviderProps<V> = PropsWithChildren<
  ItemProviderOwnProps<V>
>;

export declare type Data<D> = ReadonlyArray<D>;

export declare const DataContext: Context<Data<any> | undefined>;

export declare function DataProvider<D>(
  props: DataProviderProps<D>,
): JSX.Element;

declare interface DataProviderOwnProps<D> {
  value: Data<D>;
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

export declare const defaultTableComponents: TableComponents;

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

export declare type Index = number;

export declare const IndexContext: Context<Index | undefined>;

export declare function IndexProvider(props: IndexProviderProps): JSX.Element;

declare interface IndexProviderOwnProps {
  value: Index;
}

export declare type IndexProviderProps = PropsWithChildren<
  IndexProviderOwnProps
>;

export declare function isColumnsType<D extends object = {}>(
  type: any,
): type is ColumnsType<D>;

declare interface ItemProviderOwnProps<V> {
  value: CurrentValue<V>;
}

export declare function Row<D>(props: RowProps<D>): JSX.Element;

export declare type RowData<V> = V;

export declare const RowDataContext: Context<RowData<any> | undefined>;

export declare function RowDataProvider<V>(
  props: RowDataProviderProps<V>,
): JSX.Element;

declare interface RowDataProviderOwnProps<V> {
  value: RowData<V>;
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

export declare interface TableComponents {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}

export declare const TableComponentsContext: Context<TableComponents>;

export declare function TableComponentsProvider(
  props: TableComponentsProviderProps,
): JSX.Element;

declare interface TableComponentsProviderOwnProps {
  value: TableComponents;
}

export declare type TableComponentsProviderProps = PropsWithChildren<
  TableComponentsProviderOwnProps
>;

export declare function TableHeader(props: TableHeaderProps): JSX.Element;

declare interface TableHeaderOwnProps {}

export declare type TableHeaderProps = PropsWithChildren<TableHeaderOwnProps>;

declare interface TableOwnProps {}

export declare type TablePart = TablePartType;

export declare const TablePartContext: Context<TablePart | undefined>;

export declare function TablePartProvider(
  props: TablePartProviderProps,
): JSX.Element;

declare interface TablePartProviderOwnProps {
  value: TablePart;
}

export declare type TablePartProviderProps = PropsWithChildren<
  TablePartProviderOwnProps
>;

export declare type TablePartType = 'definition' | 'header' | 'body' | string;

export declare type TableProps = PropsWithChildren<TableOwnProps>;

export declare function useColumns(): ColumnsNode;

export declare function useContent<V>(): Content<V>;

export declare function useContentValue<D, C>(accessor: null): null;

export declare function useContentValue<D, C>(accessor: Accessor<D, C>): C;

export declare function useContentValue<D, C>(
  accessor: Accessor<D, C> | null,
): C | null;

export declare function useCurrentValue<V>(value?: V): CurrentValue<V>;

export declare function useData<D>(value?: ReadonlyArray<D>): Data<D>;

export declare function useIndex(): Index;

export declare function useRowData<V>(): RowData<V>;

export declare function useTableComponents(): TableComponents;

export declare function useTablePart(): TablePart;

export {};
