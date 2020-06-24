import React, {
  Context,
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

export interface TableComponentsContextType {
  table: ElementType;
  thead: ElementType;
  tbody: ElementType;
  tr: ElementType;
  th: ElementType;
  td: ElementType;
}
const defaultTableComponents: TableComponentsContextType = {
  table: 'table',
  thead: 'thead',
  tbody: 'tbody',
  tr: 'tr',
  th: 'th',
  td: 'td',
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
