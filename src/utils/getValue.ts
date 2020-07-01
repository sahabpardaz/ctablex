import { Accessor } from './accessor';
import { path } from './path';

export function getValue<D, C>(value: D, accessor: null): null;
export function getValue<D, C>(value: D, accessor: Accessor<D, C>): C;
export function getValue<D, C>(
  value: D,
  accessor: Accessor<D, C> | null,
): C | null;
export function getValue<D, C>(
  value: D,
  accessor: Accessor<D, C> | null,
): C | null {
  if (accessor === null) {
    return null;
  }
  if (typeof accessor === 'string') {
    return path(accessor.split('.'), value) as C;
  }
  return accessor(value);
}
