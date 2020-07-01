import React, { PropsWithChildren, useMemo } from 'react';
import { ArrayOutput } from '../array/ArrayOutput';
import { useData } from '../data/DataContext';
import { Accessor } from '../utils/accessor';
import { getValue } from '../utils/getValue';

interface RowsOwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

export type RowsProps<D> = PropsWithChildren<RowsOwnProps<D>>;

export function Rows<D>(props: RowsProps<D>) {
  const { children, keyAccessor } = props;
  const data = useData<D>(props.data);
  const getKey = useMemo(() => {
    if (keyAccessor) {
      return (value: D) => getValue<D, string | number>(value, keyAccessor);
    }
  }, [keyAccessor]);

  return (
    <ArrayOutput value={data} getKey={getKey}>
      {children}
    </ArrayOutput>
  );
}
