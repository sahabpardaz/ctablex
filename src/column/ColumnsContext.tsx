import React, {
  Context,
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'react';

export type Columns = ReactNode;
export const ColumnsContext: Context<Columns | undefined> = createContext<
  Columns | undefined
>(undefined);

export function useColumns(): Columns {
  const context = useContext(ColumnsContext);
  if (context === undefined) {
    throw new Error('useColumns must be used inside the <ColumnsProvider/>');
  }
  return context;
}

interface ColumnsProviderOwnProps {
  value: Columns;
}

export type ColumnsProviderProps = PropsWithChildren<ColumnsProviderOwnProps>;

export function ColumnsProvider(props: ColumnsProviderProps) {
  return (
    <ColumnsContext.Provider value={props.value}>
      {props.children}
    </ColumnsContext.Provider>
  );
}
