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
