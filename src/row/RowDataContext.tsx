import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type RowData<V> = V;
export const RowDataContext: Context<RowData<any> | undefined> = createContext<
  RowData<any> | undefined
>(undefined);

export function useRowData<V>(): RowData<V> {
  const context = useContext(RowDataContext);
  if (context === undefined) {
    throw new Error('useRowData must be used inside the <RowDataProvider/>');
  }
  return context;
}

interface RowDataProviderOwnProps<V> {
  value: RowData<V>;
}

export type RowDataProviderProps<V> = PropsWithChildren<
  RowDataProviderOwnProps<V>
>;

export function RowDataProvider<V>(props: RowDataProviderProps<V>) {
  return (
    <RowDataContext.Provider value={props.value}>
      {props.children}
    </RowDataContext.Provider>
  );
}
