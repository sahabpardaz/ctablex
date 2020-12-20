# ctablex

[![NPM version](https://badgen.net/npm/v/@ctablex/core)](https://npmjs.com/package/@ctablex/core)
[![NPM downloads](https://badgen.net/npm/dm/@ctablex/core)](https://npmjs.com/package/@ctablex/core)
[![Build Status](https://travis-ci.com/sahabpardaz/ctablex.svg?branch=master)](https://travis-ci.com/sahabpardaz/ctablex)
[![codecov](https://codecov.io/gh/sahabpardaz/ctablex/branch/master/graph/badge.svg)](https://codecov.io/gh/sahabpardaz/ctablex)

Featureable, flexible and powerful react table. `ctablex` will not hold you back and let you customize table UI and behavior. `ctablex` name is the combination of `table` and `ctx` (context).

<!-- toc -->

- [Install](#install)
- [Usage](#usage)

<!-- tocstop -->

## Install

```bash
yarn add @ctablex/core
```

## Usage

```tsx
import React from 'react';
import {
  DataTable,
  Columns,
  Column,
  Table,
} from '@ctablex/core';

const data = [
    id: '1',
    name: 'Gloves',
    price: 544,
    count: 5,
  },
  {
    id: '2',
    name: 'Salad',
    price: 601,
    count: 6,
  },
  {
    id: '3',
    name: 'Keyboard',
    price: 116,
    count: 1,
  },
];
export function MyTable() {
  return (
    <DataTable data={data}>
      <Columns>
        <Column header="Name" accessor="name" />
        <Column header="Price" accessor="price" />
        <Column header="Count" accessor="count" />
      </Columns>
      <Table />
    </DataTable>
  );
}
```

[live demo](https://codesandbox.io/s/github/sahabpardaz/ctablex/tree/master/examples/basic?file=/src/BasicTable.tsx), [source code](https://github.com/sahabpardaz/ctablex/tree/master/examples/basic)

### The `Table` component

The `Table`/`TableHeader`/`HeaderRow`/`TableBody`/`Rows`/`Row` components have default children. so when you write `<Table />`, it's equal to you write the following codes:

```tsx
<Table>
  <TableHeader>
    <HeaderRow>
      <Columns />
    </HeaderRow>
  </TableHeader>
  <TableBody>
    <Rows>
      <Row>
        <Columns />
      </Row>
    </Rows>
  </TableBody>
</Table>
```

### The `Columns` component

You can assume `<Columns />` component somehow renders `Columns`' children defined in the first part (`definition` part).

```tsx
<DataTable data={data}>
  <Columns>
    {/* begin children definition */}
    <Column header="Name" accessor="name" />
    <Column header="Price" accessor="price" />
    <Column header="Count" accessor="count" />
    {/* end children definition */}
  </Columns>
  <TableBody>
    <Rows>
      <Row>
        <Columns />
      </Row>
    </Rows>
  </TableBody>
</DataTable>
```

is equal to

```tsx
<DataTable data={data}>
  <TableBody>
    <Rows>
      <Row>
        <Column header="Name" accessor="name" />
        <Column header="Price" accessor="price" />
        <Column header="Count" accessor="count" />
      </Row>
    </Rows>
  </TableBody>
</DataTable>
```

## Changelog

Please read the changelog [here](https://github.com/sahabpardaz/ctablex/blob/master/CHANGELOG.md).

## License

This project is licensed under the terms of the [Apache License 2.0](https://github.com/sahabpardaz/ctablex/blob/master/LICENSE).
