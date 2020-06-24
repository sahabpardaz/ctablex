import React, { createContext, PropsWithChildren, useContext } from 'react';

export type RowDataContextType<V> = V;
export const RowDataContext = createContext<
  RowDataContextType<any> | undefined
>(undefined);

export function useRowDataContext<V>(): RowDataContextType<V> {
  const context = useContext(RowDataContext);
  if (context === undefined) {
    throw new Error(
      'useRowDataContext must be used inside the <RowDataContextProvider/>',
    );
  }
  return context;
}

interface OwnProps<V> {
  value: RowDataContextType<V>;
}

export type Props<V> = PropsWithChildren<OwnProps<V>>;

export function RowDataContextProvider<V>(props: Props<V>) {
  return (
    <RowDataContext.Provider value={props.value}>
      {props.children}
    </RowDataContext.Provider>
  );
}
