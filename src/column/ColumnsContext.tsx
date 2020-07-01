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
    throw new Error(
      'useColumnsContext must be used inside the <ColumnsContextProvider/>',
    );
  }
  return context;
}

interface ColumnsContextProviderOwnProps {
  value: ColumnsContextType;
}

export type ColumnsContextProviderProps = PropsWithChildren<
  ColumnsContextProviderOwnProps
>;

export function ColumnsContextProvider(props: ColumnsContextProviderProps) {
  return (
    <ColumnsContext.Provider value={props.value}>
      {props.children}
    </ColumnsContext.Provider>
  );
}
