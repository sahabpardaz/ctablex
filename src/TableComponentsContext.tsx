import React, {
  Context,
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

export interface TableComponentsContextType {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}
const defaultTableComponents: TableComponentsContextType = {
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

export function useTableComponentsContext(): TableComponentsContextType {
  return useContext(TableComponentsContext);
}

interface OwnProps {
  value: Partial<TableComponentsContextType>;
}

export type Props = PropsWithChildren<OwnProps>;

export function TableComponentsContextProvider(props: Props) {
  const contextValue = useTableComponentsContext();
  const value = useMemo(() => ({ ...contextValue, ...props.value }), [
    contextValue,
    props.value,
  ]);
  return (
    <TableComponentsContext.Provider value={value}>
      {props.children}
    </TableComponentsContext.Provider>
  );
}
