import React, {
  Context,
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
} from 'react';

export interface TableComponentsContextType {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}
export const defaultTableComponents: TableComponentsContextType = {
  Table: 'table',
  Thead: 'thead',
  Tbody: 'tbody',
  Tr: 'tr',
  Th: 'th',
  Td: 'td',
};

export const TableComponentsContext: Context<TableComponentsContextType> = createContext<
  TableComponentsContextType
>(defaultTableComponents);

export function useTableComponents(): TableComponentsContextType {
  return useContext(TableComponentsContext);
}

interface TableComponentsProviderOwnProps {
  value: TableComponentsContextType;
}

export type TableComponentsProviderProps = PropsWithChildren<
  TableComponentsProviderOwnProps
>;

export function TableComponentsProvider(props: TableComponentsProviderProps) {
  return (
    <TableComponentsContext.Provider value={props.value}>
      {props.children}
    </TableComponentsContext.Provider>
  );
}
