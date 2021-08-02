import React, { PropsWithChildren } from 'react';
import { useCurrentValue } from '../array/CurrentValueContext';
import { RowDataProvider } from './RowDataContext';

interface CurrentRowDataProviderOwnProps<D> {
  row?: D;
}

export type CurrentRowDataProviderProps<D> = PropsWithChildren<
  CurrentRowDataProviderOwnProps<D>
>;

export function CurrentRowDataProvider<D>(
  props: CurrentRowDataProviderProps<D>,
) {
  const { children } = props;

  const row = useCurrentValue<D>(props.row);
  return <RowDataProvider value={row}>{children}</RowDataProvider>;
}
