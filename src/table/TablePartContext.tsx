import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type TablePartType = 'definition' | 'header' | 'body' | string;
export type TablePartContextType = TablePartType;
export const TablePartContext: Context<
  TablePartContextType | undefined
> = createContext<TablePartContextType | undefined>(undefined);

export function useTablePart(): TablePartContextType {
  const context = useContext(TablePartContext);
  if (context === undefined) {
    throw new Error(
      'useTablePart must be used inside the <TablePartContextProvider/>',
    );
  }
  return context;
}

interface TablePartContextProviderOwnProps {
  value: TablePartContextType;
}

export type TablePartContextProviderProps = PropsWithChildren<
  TablePartContextProviderOwnProps
>;

export function TablePartContextProvider(props: TablePartContextProviderProps) {
  return (
    <TablePartContext.Provider value={props.value}>
      {props.children}
    </TablePartContext.Provider>
  );
}
