# Material-UI example

Material-UI Support added by providing a bunch of components with `TableComponentsContextProvider`.

```tsx
import { TableComponentsContextType } from '@ctablex/core';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

export const MuiComponents: TableComponentsContextType = {
  Table,
  Tbody: TableBody,
  Thead: TableHead,
  Tr: TableRow,
  Td: TableCell,
  Th: TableCell,
};
```

## Demo

You can:

- Open this example in a new [CodeSandbox]

[codesandbox]: https://codesandbox.io/s/github/sahabpardaz/ctablex/tree/master/examples/material-ui?file=/src/App.tsx
