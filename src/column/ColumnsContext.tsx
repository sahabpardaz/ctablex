import React, {
  Context,
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'react';

export type ColumnsContextType = ReactNode;
export const ColumnsContext: Context<
  ColumnsContextType | undefined
> = createContext<ColumnsContextType | undefined>(undefined);

export function useColumns(): ColumnsContextType {
  const context = useContext(ColumnsContext);
  if (context === undefined) {
    throw new Error('useColumns must be used inside the <ColumnsProvider/>');
  }
  return context;
}

interface ColumnsProviderOwnProps {
  value: ColumnsContextType;
}

export type ColumnsProviderProps = PropsWithChildren<ColumnsProviderOwnProps>;

export function ColumnsProvider(props: ColumnsProviderProps) {
  return (
    <ColumnsContext.Provider value={props.value}>
      {props.children}
    </ColumnsContext.Provider>
  );
}
