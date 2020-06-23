import React, { PropsWithChildren, useMemo } from 'react';
import { ArrayOutput } from './ArrayOutput';
import { useDataContext } from './DataContext';
import { Accessor, getValue } from './utils/accessor';

interface OwnProps<D> {
  keyAccessor?: Accessor<D, string | number>;
  data?: ReadonlyArray<D>;
}

type Props<D> = PropsWithChildren<OwnProps<D>>;

export function Rows<D>(props: Props<D>) {
  const { children } = props;
  const data = useDataContext<D>(props.data);
  const { keyAccessor } = props;
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
