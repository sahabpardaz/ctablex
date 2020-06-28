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
    throw new Error(
      'useRowDataContext must be used inside the <RowDataContextProvider/>',
    );
  }
  return context;
}

interface RowDataContextProviderOwnProps<V> {
  value: RowDataContextType<V>;
}

export type RowDataContextProviderProps<V> = PropsWithChildren<
  RowDataContextProviderOwnProps<V>
>;

export function RowDataContextProvider<V>(
  props: RowDataContextProviderProps<V>,
) {
  return (
    <RowDataContext.Provider value={props.value}>
      {props.children}
    </RowDataContext.Provider>
  );
}
