import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type TablePartType = 'definition' | 'header' | 'body' | string;
export type TablePartContextType = TablePartType;

/**
 * - `'header'` indicates we are inside of `TableHeader` component.
 * - `'body'` indicates we are inside of `TableBody` component.
 * - `'definition'` indicates we are inside of `DataTable` but outside of aforementioned parts.
 */
export const TablePartContext: Context<
  TablePartContextType | undefined
> = createContext<TablePartContextType | undefined>(undefined);

export function useTablePart(): TablePartContextType {
  const context = useContext(TablePartContext);
  if (context === undefined) {
    throw new Error(
      'useTablePartContext must be used inside the <TablePartContextProvider/>',
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
