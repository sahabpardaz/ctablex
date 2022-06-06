# Multipart example

This example shows how define and use multiple columns' definition.

```tsx
<Ctablex>
  <Columns>/* ... */</Columns>
  <Columns part="sum">/* ... */</Columns>
  <Table>
    <TableHeader />
    <TableBody>
      <Rows />
      <Row row={/* ... */}>
        <Columns part="sum" />
      </Row>
    </TableBody>
  </Table>
</Ctablex>
```

With `part` prop we can define new columns' definitions and use this definition for some rows

By default, `<Columns />` without `part` prop is used. The `TableHeader` and `Rows` components use `<Columns />` in default children

```tsx
<TableHeader />
```

is equals to

```tsx
<TableHeader>
  <HeaderRow>
    <Columns />
  </HeaderRow>
</TableHeader>
```

and

```tsx
<Rows />
```

is equals to

```tsx
<Rows>
  <Row>
    <Columns />
  </Row>
</Rows>
```

## Demo

You can:

- Open this example in a new [CodeSandbox]

[codesandbox]: https://codesandbox.io/s/github/sahabpardaz/ctablex/tree/master/examples/4-multipart?file=/src/ProductsTable.tsx
