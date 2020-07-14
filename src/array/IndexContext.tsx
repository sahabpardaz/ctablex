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
    throw new Error('useIndex must be used inside the <IndexProvider/>');
  }
  return context;
}

interface IndexProviderOwnProps {
  value: IndexContextType;
}

export type IndexProviderProps = PropsWithChildren<IndexProviderOwnProps>;

export function IndexProvider(props: IndexProviderProps) {
  return (
    <IndexContext.Provider value={props.value}>
      {props.children}
    </IndexContext.Provider>
  );
}
