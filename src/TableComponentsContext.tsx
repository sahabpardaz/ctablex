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

/**
 * `HTML` elements used as default components for table
 *
 * @internal
 */
const defaultTableComponents: TableComponentsContextType = {
  Table: 'table',
  Thead: 'thead',
  Tbody: 'tbody',
  Tr: 'tr',
  Th: 'th',
  Td: 'td',
};

/**
 * Table components can be customized using this context.
 * Defautl table components are `HTML` elements for table.
 */
export const TableComponentsContext: Context<TableComponentsContextType> = createContext<
  TableComponentsContextType
>(defaultTableComponents);

export function useTableComponentsContext(): TableComponentsContextType {
  return useContext(TableComponentsContext);
}

interface TableComponentsContextProviderOwnProps {
  value: Partial<TableComponentsContextType>;
}

export type TableComponentsContextProviderProps = PropsWithChildren<
  TableComponentsContextProviderOwnProps
>;

/**
 * Provides the value for `TableComponentsContext`
 *
 * @example
 * // Custom `tr` which calls the `onClick` callback with the current index of row
 * function CustomTr = ({children}:{children: React.ReactNode}) {
 *  const index = useIndexContext()
 *  const onClick = useOnClickContext()
 *  return <tr onClick={() => onClick(index)}>{children}</tr>
 * }
 *
 *
 * @example
 * // Custom `td` which sets the background color to `red` if the value of the cell is less than 10, otherwise sets it to `green`
 * function CustomTd = ({children}:{children: React.ReactNode}) {
 *  const value = useCellContext()
 *  return <td style={{background: value > 10 ? 'green' : 'red'}}>{children}</td>
 * }
 */
export function TableComponentsContextProvider(
  props: TableComponentsContextProviderProps,
) {
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
