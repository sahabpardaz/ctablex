# Complex Content example

This example shows how different columns can customize the content of their cells.

```tsx
<Column header="Sum">
  <ContentValue accessor="price">
    <NumberContent />
  </ContentValue>
  {' x '}
  <ContentValue accessor="count">
    <NumberContent />
  </ContentValue>
  {' = '}
  <ContentValue accessor={(r: Row) => r.price * r.count}>
    <NumberContent />
  </ContentValue>
</Column>
```

another way to define complex content is using `useRowData` hook.

```tsx
export function SumContent() {
  const row = useRowData<Row>();
  return (
    <Fragment>
      {row.price}
      {' x '}
      {row.count}
      {' = '}
      {row.count * row.price}
    </Fragment>
  );
}
```

```tsx
<Column header="Sum">
  <SumContent />
</Column>
```

## Demo

You can:

- Open this example in a new [CodeSandbox]

[codesandbox]: https://codesandbox.io/s/github/sahabpardaz/ctablex/tree/master/examples/3-complex-content?file=/src/ProductsTable.tsx
