import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'react';

export type ColumnsContextType = ReactNode;
export const ColumnsContext = createContext<ColumnsContextType | undefined>(
  undefined,
);

export function useColumnsContext(): ColumnsContextType {
  const context = useContext(ColumnsContext);
  if (context === undefined) {
    throw new Error(
      'useColumnsContext must be used inside the <ColumnsContextProvider/>',
    );
  }
  return context;
}

interface OwnProps {
  value: ColumnsContextType;
}

type Props = PropsWithChildren<OwnProps>;

export function ColumnsContextProvider(props: Props) {
  return (
    <ColumnsContext.Provider value={props.value}>
      {props.children}
    </ColumnsContext.Provider>
  );
}
