import React, {
  Context,
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import { Children } from './children/Children';
import { TableElements, TableElementsProvider } from './TableElementsContext';

export interface TableComponents {
  Table: ElementType;
  Thead: ElementType;
  Tbody: ElementType;
  Tr: ElementType;
  Th: ElementType;
  Td: ElementType;
}
export const defaultTableComponents: TableComponents = {
  Table: 'table',
  Thead: 'thead',
  Tbody: 'tbody',
  Tr: 'tr',
  Th: 'th',
  Td: 'td',
};

export const TableComponentsContext: Context<TableComponents> =
  createContext<TableComponents>(defaultTableComponents);

export function useTableComponents(): TableComponents {
  return useContext(TableComponentsContext);
}

interface TableComponentsProviderOwnProps {
  value: TableComponents;
}

export type TableComponentsProviderProps =
  PropsWithChildren<TableComponentsProviderOwnProps>;

export function TableComponentsProvider(props: TableComponentsProviderProps) {
  const elements = useComponentsToElements(props.value);
  return (
    <TableElementsProvider value={elements}>
      <TableComponentsContext.Provider value={props.value}>
        {props.children}
      </TableComponentsContext.Provider>
    </TableElementsProvider>
  );
}

export function useComponentsToElements(
  Components: TableComponents,
): TableElements {
  return useMemo(() => {
    return {
      table: (
        <Components.Table>
          <Children />
        </Components.Table>
      ),
      thead: (
        <Components.Thead>
          <Children />
        </Components.Thead>
      ),
      tbody: (
        <Components.Tbody>
          <Children />
        </Components.Tbody>
      ),
      tr: (
        <Components.Tr>
          <Children />
        </Components.Tr>
      ),
      th: (
        <Components.Th>
          <Children />
        </Components.Th>
      ),
      td: (
        <Components.Td>
          <Children />
        </Components.Td>
      ),
    };
  }, []);
}
