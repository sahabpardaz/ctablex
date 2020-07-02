import React, { PropsWithChildren } from 'react';
import { ColumnsContextProvider } from '../column/ColumnsContext';
import { findColumns } from '../column/findColumns';
import { TablePartContextProvider } from '../table/TablePartContext';
import { DataContextProvider, useData } from './DataContext';

interface DataTableOwnProps<D> {
  data?: ReadonlyArray<D>;
}

export type DataTableProps<D> = PropsWithChildren<DataTableOwnProps<D>>;
/**
 * Root component of `ctablex`. Provides its children with `DataContext` and `ColumnContext`
 *
 * @param props.data - data to be displayed by table
 *
 * @example
 * <DataTable data={data}>
 *  <Columns>
 *    <Column header="Name" accessor="name">
 *      <StringCell />
 *    </Column>
 *    <Column header="Price" accessor="price">
 *      <NumberCell />
 *    </Column>
 *    <Column header="Color" accessor="color">
 *      <StringCell />
 *    </Column>
 *  </Columns>
 *  <Table>
 *    <TableHeader />
 *    <TableBody>
 *      <Rows>
 *        <Row />
 *      </Rows>
 *    </TableBody>
 *  </Table>
 *</DataTable>
 *
 */
export function DataTable<D>(props: DataTableProps<D>) {
  const { children } = props;
  const columns = findColumns(children);
  const data = useData<D>(props.data);
  return (
    <DataContextProvider value={data}>
      <TablePartContextProvider value="definition">
        <ColumnsContextProvider value={columns}>
          {children}
        </ColumnsContextProvider>
      </TablePartContextProvider>
    </DataContextProvider>
  );
}
