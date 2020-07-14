import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type TablePartType = 'definition' | 'header' | 'body' | string;
export type TablePart = TablePartType;
export const TablePartContext: Context<TablePart | undefined> = createContext<
  TablePart | undefined
>(undefined);

export function useTablePart(): TablePart {
  const context = useContext(TablePartContext);
  if (context === undefined) {
    throw new Error(
      'useTablePart must be used inside the <TablePartProvider/>',
    );
  }
  return context;
}

interface TablePartProviderOwnProps {
  value: TablePart;
}

export type TablePartProviderProps = PropsWithChildren<
  TablePartProviderOwnProps
>;

export function TablePartProvider(props: TablePartProviderProps) {
  return (
    <TablePartContext.Provider value={props.value}>
      {props.children}
    </TablePartContext.Provider>
  );
}
