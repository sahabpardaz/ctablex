export interface ColumnsType<D extends object = {}> {
  __COLUMNS__: true;
}

export function isColumnsType<D extends object = {}>(
  type: any,
): type is ColumnsType<D> {
  return Boolean(type && type.__COLUMNS__);
}
