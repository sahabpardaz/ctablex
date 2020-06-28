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

interface OwnProps {
  value: IndexContextType;
}

export type Props = PropsWithChildren<OwnProps>;

export function IndexContextProvider(props: Props) {
  return (
    <IndexContext.Provider value={props.value}>
      {props.children}
    </IndexContext.Provider>
  );
}
