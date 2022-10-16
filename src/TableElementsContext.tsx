import React, {
  Context,
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
} from 'react';
import { Children } from './children/Children';

export interface TableElements {
  table: ReactElement;
  thead: ReactElement;
  tbody: ReactElement;
  tr: ReactElement;
  th: ReactElement;
  td: ReactElement;
}

const defaultTableElements: TableElements = {
  table: (
    <table>
      <Children />
    </table>
  ),
  thead: (
    <thead>
      <Children />
    </thead>
  ),
  tbody: (
    <tbody>
      <Children />
    </tbody>
  ),
  tr: (
    <tr>
      <Children />
    </tr>
  ),
  th: (
    <th>
      <Children />
    </th>
  ),
  td: (
    <td>
      <Children />
    </td>
  ),
};

export const TableElementsContext: Context<TableElements> =
  createContext<TableElements>(defaultTableElements);

export function useTableElements(): TableElements {
  return useContext(TableElementsContext);
}

interface TableElementsProviderOwnProps {
  value: TableElements;
}

type TableElementsProviderProps =
  PropsWithChildren<TableElementsProviderOwnProps>;

export function TableElementsProvider(props: TableElementsProviderProps) {
  return (
    <TableElementsContext.Provider value={props.value}>
      {props.children}
    </TableElementsContext.Provider>
  );
}
