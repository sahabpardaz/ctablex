import React, { PropsWithChildren, useMemo } from 'react';
import { ArrayOutput } from '../array/ArrayOutput';
import { useDataContext } from '../data/DataContext';
import { Accessor } from '../utils/accessor';
import { getValue } from '../utils/getValue';

interface OwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

type Props<D> = PropsWithChildren<OwnProps<D>>;

export function Rows<D>(props: Props<D>) {
  const { children, keyAccessor } = props;
  const data = useDataContext<D>(props.data);
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
