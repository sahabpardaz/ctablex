import React, {
  Context,
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'react';

export type ColumnsNode = ReactNode;
export const ColumnsContext: Context<ColumnsNode | undefined> = createContext<
  ColumnsNode | undefined
>(undefined);

export function useColumns(): ColumnsNode {
  const context = useContext(ColumnsContext);
  if (context === undefined) {
    throw new Error('useColumns must be used inside the <ColumnsProvider/>');
  }
  return context;
}

interface ColumnsProviderOwnProps {
  value: ColumnsNode;
}

export type ColumnsProviderProps = PropsWithChildren<ColumnsProviderOwnProps>;

export function ColumnsProvider(props: ColumnsProviderProps) {
  return (
    <ColumnsContext.Provider value={props.value}>
      {props.children}
    </ColumnsContext.Provider>
  );
}
