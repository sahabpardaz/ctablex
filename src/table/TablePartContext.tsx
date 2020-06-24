import React, { createContext, PropsWithChildren, useContext } from 'react';

export type TablePartType = 'definition' | 'header' | 'body' | string;
export type TablePartContextType = TablePartType;
export const TablePartContext = createContext<TablePartContextType | undefined>(
  undefined,
);

export function useTablePartContext(): TablePartContextType {
  const context = useContext(TablePartContext);
  if (context === undefined) {
    throw new Error(
      'useTablePartContext must be used inside the <TablePartContextProvider/>',
    );
  }
  return context;
}

interface OwnProps {
  value: TablePartContextType;
}

export type Props = PropsWithChildren<OwnProps>;

export function TablePartContextProvider(props: Props) {
  return (
    <TablePartContext.Provider value={props.value}>
      {props.children}
    </TablePartContext.Provider>
  );
}
