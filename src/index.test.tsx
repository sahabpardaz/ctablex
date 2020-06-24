import { render } from '@testing-library/react';
import React, { Fragment, PropsWithChildren } from 'react';
import { Cell } from './cell/Cell';
import { HeaderRow } from './header/HeaderRow';
import {
  Column,
  Columns,
  DataTable,
  Row,
  Rows,
  DefaultCell,
  Table,
  TableBody,
  TableHeader,
} from './index';
import { useIndexContext } from './array/IndexContext';
import { TableUIAdapterContextProvider } from './TableUIAdapterContext';

const IndexCell = () => {
  const index = useIndexContext();
  return <Fragment>{index + 1}.</Fragment>;
};

const data = [
  {
    id: '1',
    name: 'Gloves',
    price: 544,
    count: 5,
    color: 'plum',
  },
  {
    id: '2',
    name: 'Salad',
    price: 601,
    count: 6,
    color: 'turquoise',
  },
  {
    id: '3',
    name: 'Keyboard',
    price: 116,
    count: 1,
    color: 'silver',
  },
];

describe('ctablex', () => {
  it('should render table', () => {
    const c = (
      <DataTable data={data}>
        <Columns>
          <Column>
            <IndexCell />
          </Column>
          <Column header="Name" accessor="name">
            <DefaultCell />
          </Column>
          <Column header="Price" accessor="price">
            <DefaultCell />
          </Column>
          <Column header="Count" accessor="price">
            <DefaultCell />
          </Column>
          <Column header="Total" accessor={(r: any) => r.price * r.count}>
            <DefaultCell />
          </Column>
          <Column header="Color" accessor="color">
            <DefaultCell />
          </Column>
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
    const { unmount } = render(c);
    unmount();
  });
  it('should provide index context', () => {
    const c = (
      <DataTable data={data}>
        <Columns>
          <Column>
            <IndexCell />
          </Column>
          <Column header="Name" accessor="name">
            <DefaultCell />
          </Column>
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
    const { unmount } = render(c);
    unmount();
  });
  it('should use custom adapter', () => {
    const adapter = {
      table: (props: PropsWithChildren<{}>) => {
        return (
          <table style={{ backgroundColor: '#ccc' }}>{props.children}</table>
        );
      },
    };

    const c = (
      <TableUIAdapterContextProvider value={adapter}>
        <DataTable data={data}>
          <Columns>
            <Column header="Name" accessor="name">
              <DefaultCell />
            </Column>
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
      </TableUIAdapterContextProvider>
    );
    const { unmount } = render(c);
    unmount();
  });
  it('should use custom key accessor', () => {
    const c = (
      <DataTable data={data}>
        <Columns>
          <Column header="Name" accessor="name">
            <DefaultCell />
          </Column>
        </Columns>
        <Table>
          <TableHeader>
            <HeaderRow />
          </TableHeader>
          <TableBody>
            <Rows keyAccessor="id">
              <Row />
            </Rows>
          </TableBody>
        </Table>
      </DataTable>
    );
    const { unmount } = render(c);
    unmount();
  });
  it('should render empty column', () => {
    const c = (
      <DataTable data={data}>
        <Columns>
          <Column />
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
    const { unmount } = render(c);
    unmount();
  });
  it('should handle single row', () => {
    const c = (
      <DataTable data={data}>
        <Columns>
          <Column header="Name" accessor="name">
            <DefaultCell />
          </Column>
        </Columns>
        <Table>
          <TableHeader>
            <HeaderRow />
          </TableHeader>
          <TableBody>
            <Row row={data[0]} />
          </TableBody>
        </Table>
      </DataTable>
    );
    const { unmount } = render(c);
    unmount();
  });
  it('should throw error if data is undefined', () => {
    // @ts-ignore
    console.error.mockImplementation(() => {});
    expect(() => render(<Row />)).toThrow();
    expect(() => render(<DefaultCell />)).toThrow();
    expect(() => render(<Column />)).toThrow();
    expect(() => render(<Cell accessor="id" />)).toThrow();
    expect(() =>
      render(
        <DataTable data={data}>
          <Columns />
          <Table>
            <TableBody>
              <Row />
            </TableBody>
          </Table>
        </DataTable>,
      ),
    ).toThrow();
    expect(() => render(<IndexCell />)).toThrow();
    expect(() => render(<DataTable />)).toThrow();
    render(
      <DataTable data={[]}>
        <Column />
      </DataTable>,
    );
  });
});
