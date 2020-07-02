import React, { PropsWithChildren, ReactNode } from 'react';
import { DefaultContent } from '..';
import { Cell } from '../cell/Cell';
import { HeaderCell } from '../header/HeaderCell';
import { useTablePart } from '../table/TablePartContext';
import { Accessor } from '../utils/accessor';

interface ColumnOwnProps<D, C> {
  header?: ReactNode;
  accessor?: Accessor<D, C> | null;
}

export type ColumnProps<D, C> = PropsWithChildren<ColumnOwnProps<D, C>>;

/**
 * Table column, values based on `data` passed on to `DataTable`
 *
 * @param props.header - Column title rendered in `th`
 * @param props.accessor - Bind the column to `data`.
 *
 * @example
 * // This column will display `data.location.latitude` values
 * <Column accessor="location.latitude" header="Latitude" />
 *
 *  @example
 * // You can compute values based on row values
 * <Column accessor={(row) => `${row.location.latitude} , ${row.location.longitude}`} header="lat/long"
 */
export function Column<D, C>(props: ColumnProps<D, C>) {
  const { children = <DefaultContent />, accessor = null } = props;
  const part = useTablePart();
  if (part === 'header') {
    return <HeaderCell header={props.header} />;
  }
  if (part === 'body') {
    return <Cell accessor={accessor}>{children}</Cell>;
  }
  return null;
}
