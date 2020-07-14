import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type Index = number;
export const IndexContext: Context<Index | undefined> = createContext<
  Index | undefined
>(undefined);

export function useIndex(): Index {
  const context = useContext(IndexContext);
  if (context === undefined) {
    throw new Error('useIndex must be used inside the <IndexProvider/>');
  }
  return context;
}

interface IndexProviderOwnProps {
  value: Index;
}

export type IndexProviderProps = PropsWithChildren<IndexProviderOwnProps>;

export function IndexProvider(props: IndexProviderProps) {
  return (
    <IndexContext.Provider value={props.value}>
      {props.children}
    </IndexContext.Provider>
  );
}
