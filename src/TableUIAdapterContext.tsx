import React, {
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

export interface TableUIAdapterContextType {
  table: ElementType;
  thead: ElementType;
  tbody: ElementType;
  tr: ElementType;
  th: ElementType;
  td: ElementType;
}
const defaultTableUIAdapter: TableUIAdapterContextType = {
  table: 'table',
  thead: 'thead',
  tbody: 'tbody',
  tr: 'tr',
  th: 'th',
  td: 'td',
};

export const TableUIAdapterContext = createContext<TableUIAdapterContextType>(
  defaultTableUIAdapter,
);

export function useTableUIAdapterContext(): TableUIAdapterContextType {
  return useContext(TableUIAdapterContext);
}

interface OwnProps {
  value: Partial<TableUIAdapterContextType>;
}

export type Props = PropsWithChildren<OwnProps>;

export function TableUIAdapterContextProvider(props: Props) {
  const contextValue = useTableUIAdapterContext();
  const value = useMemo(() => ({ ...contextValue, ...props.value }), [
    contextValue,
    props.value,
  ]);
  return (
    <TableUIAdapterContext.Provider value={value}>
      {props.children}
    </TableUIAdapterContext.Provider>
  );
}
