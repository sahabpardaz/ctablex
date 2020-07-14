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

interface TableComponentsContextProviderOwnProps {
  value: TableComponentsContextType;
}

export type TableComponentsContextProviderProps = PropsWithChildren<
  TableComponentsContextProviderOwnProps
>;

export function TableComponentsContextProvider(
  props: TableComponentsContextProviderProps,
) {
  return (
    <TableComponentsContext.Provider value={props.value}>
      {props.children}
    </TableComponentsContext.Provider>
  );
}
