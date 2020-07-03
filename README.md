# ctablex

[![NPM version](https://badgen.net/npm/v/@ctablex/core)](https://npmjs.com/package/@ctablex/core)
[![NPM downloads](https://badgen.net/npm/dm/@ctablex/core)](https://npmjs.com/package/@ctablex/core)
[![Build Status](https://travis-ci.com/ctablex/core.svg?branch=master)](https://travis-ci.com/ctablex/core)
[![codecov](https://codecov.io/gh/ctablex/core/branch/master/graph/badge.svg)](https://codecov.io/gh/ctablex/core)

Flexible and powerful react table.

<!-- toc -->

- [Install](#install)
- [Usage](#usage)

<!-- tocstop -->

## Install

```bash
yarn add @ctablex/core
```

## Usage

```js
import React from 'react';
import {
  DataTable,
  Columns,
  Column,
  IndexCell,
  Table,
  TableHeader,
  HeaderRow,
  TableBody,
  Rows,
  Row,
} from '@ctablex/core';

const data = [
  {
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
      <Table>
        <TableHeader>
          <HeaderRow />
        </TableHeader>
        <TableBody>
          <Rows>
            <Row />
          </Rows>
        </TableBody>
      </Table>
    </DataTable>
  );
}
```

## How it works

`ctablex` is using react context everywhere to make it 100% customizable.  
Understanding how it works under the hood gonna help you a lot. So we recommend you to read this section.

### TableComponents

`ctablex` does not focus on UI, so it comes with default `HTML` elements as its components and do not use UI libraries like `material-ui` or `bootstrap`. In order to customize table components, you can do it by using `TableComponentsContext`. Wrap `DataTable` with `TableComponentsContextProvider` component and specify `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td` as `value`.

### DataTable

It is the root component for `ctablex`. It receives `data` and provides it to its children through `DataContex` and also finds `Column` components among its `children` and provide them to its `children` using `ColumnsContextProvider`.

### Columns

It helps `DataTable` to find `Column` components by wrapping `Column` components. `Column` components must be declared inside of `Columns`.

### Column

Instead of declaring columns as objects and pass it to table, which most tables do, declare them as react components inside of `Columns`.

Also as mentioned before, `Column` components will be provided through table, depending on where the component which wants to render `Column` is placed, `Column` component will behave accordingly.

#### accessor

`accessor` specifies the value for a given object:

- It can be a path string like `'name'` or `'location.lat` (For nested properties use `.` notation).
- It can be a function which would be called with the current row as the argument. For instance, `(row: any) => row.name.toUppercase()` will use the `name` propery of each row and transform it to upper-case.

#### Where it is renedered

- If it is in `header` part, it will render `HeaderCell` with `header` prop as its `children`. `header` can be a simple string like `'Name'` or a custom component.
- If it is in `body` part, it will render `Cell`. `accessor` and `children` of `Column` component are passed to `Cell`. Default `children` value is `DefaultContent`. Let's say you have a column which you would like to show a boolean value as a colored circle. You can pass your custom component as `Column` children.

### Table

Renders the provided `Table` component read from `TableComponentsContext`.

### TableHeader

Renders the provided `Thead` component read from `TableComponentsContext`. Also sets `TablePartContext` to `header` so its `children` would know in which part they are being rendered.

### HeaderRow

Renders `Column` components inside of the provided `Tr` component read from `TableComponentsContext`. As mentioned in [Column section](###Column), `Column` components will render `HeaderCell` components.

### TableBody

Renders the provided `Tbody` component read from `TableComponentsContext`. Also sets `TablePartContext` to `body` so its `children` would know in which part they are being rendered.

### ArrayOutput

`ArrayOutput` is like `map` in javascript, it renders provided `children` component once for each element in `value`, in order. It iterates through `value` array and render `children` for each and provide `IndexContext` and `ItemContext`, like `currentValue` and `index` arguments in `map` callback method.

Here are two different approaches for iterating through elements of array in react

- Using `map`

```js
const scores = [31, 93, 42, 0, 73, 71, 89, 43, 98];

function Row({ currentValue, index }: { currentValue: number, index: number }) {
  const color = currentValue > 2 ? 'green' : 'black';
  const backgroundColor = index % 2 ? 'white' : '#eee';

  return <div style={{ color, backgroundColor }}>{currentValue}</div>;
}

function Rows() {
  return (
    <>
      {scores.map((currentValue, index) => (
        <Row value={currentValue * index} key={index} />
      ))}
    </>
  );
}
```

- Using `ArrayOutput`, which is more declarative and make reusability easier:

```js
const scores = [31, 93, 42, 0, 73, 71, 89, 43, 98];

function Row() {
  const value = useItem();
  const index = useIndex();

  const color = currentValue > 2 ? 'green' : 'black';
  const backgroundColor = index % 2 ? 'white' : '#eee';

  return <div style={{ color, backgroundColor }}>{value}</div>;
}

function Rows() {
  return(
    <ArrayOutput value={array}>
      <MyComponent />
    </ArrayOutput>,
  );
}
```

### Rows

Using `ArrayOutput` component, iterates through each element of `data` and render its `children`. `data` can be read in two ways, through context or props. `data` received from props will override `data` received from `DataContex`.

### Row

Renders the provided `Tr` component read from `TableComponentsContext`. Also provides the current row data through context (`RowDataContext`) for its `children`. Row data can be received through props and context as well. `row` prop will override the row data received from `ItemContext`. So always use `RowDataContext` inside of `Row` component to be sure that your data has not been overriden by `row` prop in `Row` component.
Its `children` have access to `RowDataContext` and `IndexContext`. So you can customize each row and each cell based on row data and its index.

## Changelog

Please read the changelog [here](https://github.com/sahabpardaz/ctablex/blob/master/CHANGELOG.md).

## License

This project is licensed under the terms of the [Apache License 2.0](https://github.com/sahabpardaz/ctablex/blob/master/LICENSE).
