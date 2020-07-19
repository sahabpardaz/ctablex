import { useRowData } from '../row/RowDataContext';
import { Accessor } from '../utils/accessor';
import { getValue } from '../utils/getValue';

export function useContentValue<D, C>(accessor: null): null;
export function useContentValue<D, C>(accessor: Accessor<D, C>): C;
export function useContentValue<D, C>(
  accessor: Accessor<D, C> | null,
): C | null;
export function useContentValue<D, C>(
  accessor: Accessor<D, C> | null,
): C | null {
  const row = useRowData<D>();
  return getValue(row, accessor) ?? null;
}
