import React, { createContext, PropsWithChildren, useContext } from 'react';

export type IndexContextType = number;
export const IndexContext = createContext<IndexContextType | undefined>(
  undefined,
);

export function useIndexContext(): IndexContextType {
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
