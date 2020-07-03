import React, { Fragment, PropsWithChildren } from 'react';
import { useTablePart } from '../table/TablePartContext';

interface ColumnsOwnProps {}

export type ColumnsProps = PropsWithChildren<ColumnsOwnProps>;

/**
 * Wraps `Column` components within
 *
 * @example
 * <Columns>
 *   <Column header="Name" accessor="name">
 *     <StringCell />
 *   </Column>
 *   <Column header="Price" accessor="price">
 *     <NumberCell />
 *   </Column>
 *   <Column header="Color" accessor="color">
 *     <StringCell />
 *   </Column>
 * </Columns>
 */
export function Columns(props: ColumnsProps) {
  const { children } = props;
  const part = useTablePart();
  if (part === 'definition') {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}

Columns.__COLUMNS__ = true;
