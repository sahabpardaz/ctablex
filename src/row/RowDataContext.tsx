import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type RowDataContextType<V> = V;
export const RowDataContext: Context<
  RowDataContextType<any> | undefined
> = createContext<RowDataContextType<any> | undefined>(undefined);

export function useRowData<V>(): RowDataContextType<V> {
  const context = useContext(RowDataContext);
  if (context === undefined) {
    throw new Error('useRowData must be used inside the <RowDataProvider/>');
  }
  return context;
}

interface RowDataProviderOwnProps<V> {
  value: RowDataContextType<V>;
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
