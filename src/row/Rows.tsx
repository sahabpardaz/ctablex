import React, { PropsWithChildren, useMemo } from 'react';
import { ArrayOutput } from '../array/ArrayOutput';
import { useData } from '../data/DataContext';
import { Accessor } from '../utils/accessor';
import { getValue } from '../utils/getValue';
import { Row } from './Row';

interface RowsOwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

export type RowsProps<D> = PropsWithChildren<RowsOwnProps<D>>;

const defaultChildren = <Row />;

export function Rows<D>(props: RowsProps<D>) {
  const { children = defaultChildren, keyAccessor } = props;
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
