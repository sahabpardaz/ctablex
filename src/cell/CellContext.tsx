import React, { createContext, PropsWithChildren, useContext } from 'react';

export type CellContextType<V> = V;
export const CellContext = createContext<CellContextType<any> | undefined>(
  undefined,
);

export function useCellContext<V>(): CellContextType<V> {
  const context = useContext(CellContext);
  if (context === undefined) {
    throw new Error(
      'useCellContext must be used inside the <CellContextProvider/>',
    );
  }
  return context;
}

interface OwnProps<V> {
  value: CellContextType<V>;
}

export type Props<V> = PropsWithChildren<OwnProps<V>>;

export function CellContextProvider<V>(props: Props<V>) {
  return (
    <CellContext.Provider value={props.value}>
      {props.children}
    </CellContext.Provider>
  );
}
