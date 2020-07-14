import { render, screen } from '@testing-library/react';
import React, { Fragment, PropsWithChildren } from 'react';
import {
  ArrayOutput,
  Cell,
  Column,
  Columns,
  ColumnsContext,
  ColumnsProvider,
  ContentContext,
  ContentProvider,
  ContentValue,
  CurrentValueContext,
  CurrentValueProvider,
  DataContext,
  DataProvider,
  DataTable,
  DefaultContent,
  defaultTableComponents,
  findColumns,
  getValue,
  HeaderCell,
  HeaderRow,
  IndexContext,
  IndexProvider,
  isColumnsType,
  Row,
  RowDataContext,
  RowDataProvider,
  Rows,
  Table,
  TableBody,
  TableComponentsContext,
  TableComponentsProvider,
  TableHeader,
  TablePartContext,
  TablePartProvider,
  useColumns,
  useContent,
  useContentValue,
  useCurrentValue,
  useData,
  useIndex,
  useRowData,
  useTableComponents,
  useTablePart,
} from './index';

const IndexCell = () => {
  const index = useIndex();
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
    render(
      <DataTable data={data}>
        <Columns>
          <Column>
            <IndexCell />
          </Column>
          <Column header="Name" accessor="name" />
          <Column header="Price" accessor="price" />
          <Column header="Count" accessor="count" />
          <Column header="Color" accessor="color" />
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
      </DataTable>,
    );
  });
  it('should support multiple content in cell', () => {
    render(
      <DataTable data={data}>
        <Columns>
          <Column header="Name" accessor="name" />
          <Column header="Total">
            <ContentValue accessor="price" />
            {' x '}
            <ContentValue accessor="count" />
            {' = '}
            <ContentValue accessor={(r: any) => r.price * r.count} />
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
      </DataTable>,
    );
    expect(screen.queryByText(/544 x 5 = 2720/)).toBeInTheDocument();
    expect(screen.queryByText(/601 x 6 = 3606/)).toBeInTheDocument();
    expect(screen.queryByText(/116 x 1 = 1/)).toBeInTheDocument();
  });
  it('should provide index context', () => {
    render(
      <DataTable data={data}>
        <Columns>
          <Column>
            <IndexCell />
          </Column>
          <Column header="Name" accessor="name" />
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
      </DataTable>,
    );
    expect(screen.queryByText(/1\./)).toBeInTheDocument();
    expect(screen.queryByText(/2\./)).toBeInTheDocument();
    expect(screen.queryByText(/3\./)).toBeInTheDocument();
  });
  it('should use custom Components', () => {
    const components = {
      ...defaultTableComponents,
      Table: (props: PropsWithChildren<{}>) => {
        return (
          <table style={{ backgroundColor: '#ccc' }} data-testid="table">
            {props.children}
          </table>
        );
      },
    };

    render(
      <TableComponentsProvider value={components}>
        <DataTable data={data}>
          <Columns>
            <Column header="Name" accessor="name" />
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
      </TableComponentsProvider>,
    );
    expect(screen.queryByTestId('table')).toBeInTheDocument();
  });
  it('should use custom key accessor', () => {
    const fn = jest.fn((row: any) => row.id);
    render(
      <DataTable data={data}>
        <Columns>
          <Column header="Name" accessor="name" />
        </Columns>
        <Table>
          <TableHeader>
            <HeaderRow />
          </TableHeader>
          <TableBody>
            <Rows keyAccessor={fn}>
              <Row />
            </Rows>
          </TableBody>
        </Table>
      </DataTable>,
    );
    expect(fn).toBeCalled();
  });
  it('should render empty column', () => {
    const { container } = render(
      <DataTable data={data}>
        <Columns>
          <Column />
          <Column accessor="name" children="" />
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
      </DataTable>,
    );
    const tds = container.querySelectorAll('td');

    expect(tds).toHaveLength(6);
    tds.forEach((td) => expect(td).toHaveTextContent(''));
    expect(container.querySelectorAll('th')).toHaveLength(2);
  });
  it('should render a custom Row with external data', () => {
    render(
      <DataTable data={data}>
        <Columns>
          <Column header="Name" accessor="name" />
        </Columns>
        <Table>
          <TableHeader>
            <HeaderRow />
          </TableHeader>
          <TableBody>
            <Row row={data[0]} />
          </TableBody>
        </Table>
      </DataTable>,
    );
    expect(screen.queryByText('Gloves')).toBeInTheDocument();
  });
  it('should throw error if data is undefined', () => {
    // @ts-ignore
    console.error.mockImplementation(() => {});
    expect(() => render(<Row />)).toThrow();
    expect(() => render(<DefaultContent />)).toThrow();
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
    expect(() =>
      render(
        <DataTable data={[]}>
          <Column />
        </DataTable>,
      ),
    ).not.toThrow();
  });

  it('should export every things', () => {
    expect(DataTable).toBeDefined();
    expect(TableComponentsContext).toBeDefined();
    expect(useTableComponents).toBeDefined();
    expect(TableComponentsProvider).toBeDefined();
    expect(useData).toBeDefined();
    expect(DataContext).toBeDefined();
    expect(DataProvider).toBeDefined();
    expect(Columns).toBeDefined();
    expect(Column).toBeDefined();
    expect(useColumns).toBeDefined();
    expect(ColumnsContext).toBeDefined();
    expect(ColumnsProvider).toBeDefined();
    expect(isColumnsType).toBeDefined();
    expect(findColumns).toBeDefined();
    expect(TableHeader).toBeDefined();
    expect(HeaderRow).toBeDefined();
    expect(HeaderCell).toBeDefined();
    expect(Rows).toBeDefined();
    expect(Row).toBeDefined();
    expect(useRowData).toBeDefined();
    expect(RowDataProvider).toBeDefined();
    expect(RowDataContext).toBeDefined();
    expect(TableBody).toBeDefined();
    expect(Table).toBeDefined();
    expect(TablePartContext).toBeDefined();
    expect(TablePartProvider).toBeDefined();
    expect(useTablePart).toBeDefined();
    expect(DefaultContent).toBeDefined();
    expect(Cell).toBeDefined();
    expect(ContentValue).toBeDefined();
    expect(useContentValue).toBeDefined();
    expect(ContentContext).toBeDefined();
    expect(ContentProvider).toBeDefined();
    expect(useContent).toBeDefined();
    expect(ArrayOutput).toBeDefined();
    expect(useCurrentValue).toBeDefined();
    expect(CurrentValueProvider).toBeDefined();
    expect(CurrentValueContext).toBeDefined();
    expect(useIndex).toBeDefined();
    expect(IndexContext).toBeDefined();
    expect(IndexProvider).toBeDefined();
    expect(getValue).toBeDefined();
  });
});
