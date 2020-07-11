import { TableComponents, TableComponentsProvider } from '@ctablex/core';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React, { PropsWithChildren } from 'react';

export const MuiComponents: TableComponents = {
  Table,
  Tbody: TableBody,
  Thead: TableHead,
  Tr: TableRow,
  Td: TableCell,
  Th: TableCell,
};

interface Props {}
export function MuiTableProvider(props: PropsWithChildren<Props>) {
  const { children } = props;
  return (
    <TableComponentsProvider value={MuiComponents}>
      {children}
    </TableComponentsProvider>
  );
}
