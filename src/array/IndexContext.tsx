import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type IndexContextType = number;
export const IndexContext: Context<
  IndexContextType | undefined
> = createContext<IndexContextType | undefined>(undefined);

export function useIndex(): IndexContextType {
  const context = useContext(IndexContext);
  if (context === undefined) {
    throw new Error(
      'useIndexContext must be used inside the <IndexContextProvider/>',
    );
  }
  return context;
}

interface IndexContextProviderOwnProps {
  value: IndexContextType;
}

export type IndexContextProviderProps = PropsWithChildren<
  IndexContextProviderOwnProps
>;

export function IndexContextProvider(props: IndexContextProviderProps) {
  return (
    <IndexContext.Provider value={props.value}>
      {props.children}
    </IndexContext.Provider>
  );
}
