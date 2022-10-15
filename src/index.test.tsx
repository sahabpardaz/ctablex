import { render, screen } from '@testing-library/react';
import React, { Fragment, PropsWithChildren } from 'react';
import {
  ArrayOutput,
  Cell,
  Children,
  ChildrenProvider,
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
  TableElementsContext,
  TableElementsProvider,
  TableHeader,
  TablePartContext,
  TablePartProvider,
  useChildren,
  useColumns,
  UseColumns,
  useContent,
  useContentValue,
  useCurrentValue,
  useData,
  useIndex,
  useRowData,
  useTableComponents,
  useTableElements,
  useTablePart,
  withDefaultChildren,
} from './index';

const IndexCell = () => {
  const index = useIndex();
  return <Fragment>{index + 1}.</Fragment>;
};

type Data = {
  id: string;
  name: string;
  price: number;
  count: number;
  color: string;
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
        <Table />
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
    // @ts-ignore
    console.error.mockImplementation(() => {});
    const components = {
      ...defaultTableComponents,
      Table: (props: PropsWithChildren<{}>) => {
        return (
          <table style={{ backgroundColor: '#ccc' }} data-testid="table">
            {props.children}
          </table>
        );
      },
      Th: (props: PropsWithChildren<{ color?: string }>) => (
        <th color={props.color} data-testid="th">
          {props.children}
        </th>
      ),
      Td: (props: PropsWithChildren<{ color?: string }>) => (
        <td color={props.color} data-testid="td">
          {props.children}
        </td>
      ),
    };

    render(
      <TableComponentsProvider value={components}>
        <DataTable data={data}>
          <Columns>
            <Column
              header="Name"
              accessor="name"
              ThProps={{ color: 'red' }}
              TdProps={{ color: 'blue' }}
            />
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
    expect(screen.queryAllByTestId('th')[0]).toHaveAttribute('color', 'red');
    expect(screen.queryAllByTestId('td')[0]).toHaveAttribute('color', 'blue');
    expect(console.error).toBeCalledTimes(2);
    expect(console.error).toBeCalledWith(
      'ThProps is deprecated, use thEl instead',
    );
    expect(console.error).toBeCalledWith(
      'TdProps is deprecated, use tdEl instead',
    );
  });
  it('should use custom Elements', () => {
    render(
      <DataTable data={data}>
        <Columns>
          <Column
            header="Name"
            accessor="name"
            thEl={
              <th color="red" data-testid="th">
                <Children />
              </th>
            }
            tdEl={
              <td color="blue" data-testid="td">
                <Children />
              </td>
            }
          />
        </Columns>
        <Table
          tableEl={
            <table data-testid="table">
              <Children />
            </table>
          }
        >
          <TableHeader
            theadEl={
              <thead data-testid="thead">
                <Children />
              </thead>
            }
          >
            <HeaderRow
              trEl={
                <tr data-testid="header-row">
                  <Children />
                </tr>
              }
            />
          </TableHeader>
          <TableBody
            tbodyEl={
              <tbody data-testid="tbody">
                <Children />
              </tbody>
            }
          >
            <Rows>
              <Row
                trEl={
                  <tr data-testid="row">
                    <Children />
                  </tr>
                }
              />
            </Rows>
          </TableBody>
        </Table>
      </DataTable>,
    );
    expect(screen.queryByTestId('table')).toBeInTheDocument();
    expect(screen.queryByTestId('thead')).toBeInTheDocument();
    expect(screen.queryByTestId('header-row')).toBeInTheDocument();
    expect(screen.queryByTestId('tbody')).toBeInTheDocument();
    expect(screen.getAllByTestId('row')[0]).toBeInTheDocument();
    expect(screen.queryAllByTestId('th')[0]).toHaveAttribute('color', 'red');
    expect(screen.queryAllByTestId('td')[0]).toHaveAttribute('color', 'blue');
  });
  it('should use custom Elements with default children', () => {
    const MyTable = withDefaultChildren('table');
    const MyThead = withDefaultChildren('thead');
    const MyTbody = withDefaultChildren('tbody');
    const MyTr = withDefaultChildren('tr');
    const MyTh = withDefaultChildren('th');
    const MyTd = withDefaultChildren('td');
    render(
      <DataTable data={data}>
        <Columns>
          <Column
            header="Name"
            accessor="name"
            thEl={<MyTh color="red" data-testid="th" />}
            tdEl={<MyTd color="blue" data-testid="td" />}
          />
        </Columns>
        <Table tableEl={<MyTable data-testid="table" />}>
          <TableHeader theadEl={<MyThead data-testid="thead" />}>
            <HeaderRow trEl={<MyTr data-testid="header-row" />} />
          </TableHeader>
          <TableBody tbodyEl={<MyTbody data-testid="tbody" />}>
            <Rows>
              <Row trEl={<MyTr data-testid="row" />} />
            </Rows>
          </TableBody>
        </Table>
      </DataTable>,
    );
    expect(screen.queryByTestId('table')).toBeInTheDocument();
    expect(screen.queryByTestId('thead')).toBeInTheDocument();
    expect(screen.queryByTestId('header-row')).toBeInTheDocument();
    expect(screen.queryByTestId('tbody')).toBeInTheDocument();
    expect(screen.getAllByTestId('row')[0]).toBeInTheDocument();
    expect(screen.queryAllByTestId('th')[0]).toHaveAttribute('color', 'red');
    expect(screen.queryAllByTestId('td')[0]).toHaveAttribute('color', 'blue');
  });
  it('should use custom Elements with custom child', () => {
    const MyRow = (props: { activeId: string }) => {
      const Components = useTableComponents();
      const value = useCurrentValue<Data>();
      const active = value.id === props.activeId;
      return (
        <Components.Tr
          data-testid="row"
          className={active ? 'active' : undefined}
        >
          <Children />
        </Components.Tr>
      );
    };
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
            <Rows>
              <Row trEl={<MyRow activeId="2" />} />
            </Rows>
          </TableBody>
        </Table>
      </DataTable>,
    );
    expect(screen.getAllByTestId('row')[1]).toHaveClass('active');
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
  it('should render a custom Row with different columns definition', () => {
    const count = data.map((row) => row.count).reduce((a, b) => a + b, 0);
    const summary = { count };
    render(
      <DataTable data={data}>
        <Columns>
          <Column header="Name" accessor="name" />
          <Column header="Count" accessor="count" />
        </Columns>
        <Columns part="summary">
          <Column>Total</Column>
          <Column accessor="count">
            <DefaultContent /> (Sum)
          </Column>
        </Columns>
        <Table>
          <TableHeader>
            <HeaderRow>
              <Columns />
            </HeaderRow>
          </TableHeader>
          <TableBody>
            <Row row={summary}>
              <Columns part="summary" />
            </Row>
            <Rows>
              <Row />
            </Rows>
          </TableBody>
        </Table>
      </DataTable>,
    );
    expect(screen.queryByText('12 (Sum)')).toBeInTheDocument();
  });
  it('should throw error if data is undefined', () => {
    // @ts-ignore
    console.error.mockImplementation(() => {});
    expect(() => render(<Row />)).toThrow();
    expect(() => render(<Columns />)).toThrow();
    expect(() => render(<UseColumns />)).toThrow();
    expect(() =>
      render(
        <ColumnsProvider value={[null]}>
          <UseColumns />
        </ColumnsProvider>,
      ),
    ).not.toThrow();
    expect(() => render(<DefaultContent />)).toThrow();
    expect(() => render(<Column />)).toThrow();
    expect(() => render(<Cell accessor="id" />)).toThrow();
    expect(() =>
      render(
        <DataTable data={data}>
          <Columns />
          <Table>
            <TableBody>
              <Row>
                <Columns />
              </Row>
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
    ).toThrow();
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
    expect(UseColumns).toBeDefined();
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

    expect(Children).toBeDefined();
    expect(useChildren).toBeDefined();
    expect(ChildrenProvider).toBeDefined();
    expect(withDefaultChildren).toBeDefined();

    expect(useTableElements).toBeDefined();
    expect(TableElementsProvider).toBeDefined();
    expect(TableElementsContext).toBeDefined();
  });
});
