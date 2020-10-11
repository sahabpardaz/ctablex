import React, {
  Context,
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
} from 'react';

export interface TableComponents {
  Table: ElementType;
  Thead: ElementType;
  Tfoot: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}
export const defaultTableComponents: TableComponents = {
  Table: 'table',
  Thead: 'thead',
  Tfoot: 'tfoot',
  Tbody: 'tbody',
  Tr: 'tr',
  Th: 'th',
  Td: 'td',
};

export const TableComponentsContext: Context<TableComponents> = createContext<
  TableComponents
>(defaultTableComponents);

export function useTableComponents(): TableComponents {
  return useContext(TableComponentsContext);
}

interface TableComponentsProviderOwnProps {
  value: TableComponents;
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
