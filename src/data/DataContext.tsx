import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type Data<D> = ReadonlyArray<D>;
export const DataContext: Context<Data<any> | undefined> = createContext<
  Data<any> | undefined
>(undefined);

export function useData<D>(value?: ReadonlyArray<D>): Data<D> {
  const context = useContext(DataContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error('useData must be used inside the <DataProvider/>');
  }
  return context;
}

interface DataProviderOwnProps<D> {
  value: Data<D>;
}

export type DataProviderProps<D> = PropsWithChildren<DataProviderOwnProps<D>>;

export function DataProvider<D>(props: DataProviderProps<D>) {
  return (
    <DataContext.Provider value={props.value}>
      {props.children}
    </DataContext.Provider>
  );
}
