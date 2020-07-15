# Custom Content example

This example shows how different columns can customize the content of their cells.

```tsx
import { useContent } from '@ctablex/core';

const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

export function NumberContent() {
  const content = useContent<number>();
  const str = formatter.format(content);
  return <Fragment>{str}</Fragment>;
}
```

```diff
-        <Column header="Price" accessor="price" />
+        <Column header="Price" accessor="price">
+          <NumberContent />
+        </Column>
```

## Demo

You can:

- Open this example in a new [CodeSandbox]

[codesandbox]: https://codesandbox.io/s/github/sahabpardaz/ctablex/tree/master/examples/content?file=/src/ProductsTable.tsx
