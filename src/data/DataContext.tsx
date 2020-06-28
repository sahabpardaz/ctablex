import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type DataContextType<D> = ReadonlyArray<D>;
export const DataContext: Context<
  DataContextType<any> | undefined
> = createContext<DataContextType<any> | undefined>(undefined);

export function useData<D>(value?: ReadonlyArray<D>): DataContextType<D> {
  const context = useContext(DataContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error(
      'useDataContext must be used inside the <DataContextProvider/>',
    );
  }
  return context;
}

interface DataContextProviderOwnProps<D> {
  value: DataContextType<D>;
}

export type DataContextProviderProps<D> = PropsWithChildren<
  DataContextProviderOwnProps<D>
>;

export function DataContextProvider<D>(props: DataContextProviderProps<D>) {
  return (
    <DataContext.Provider value={props.value}>
      {props.children}
    </DataContext.Provider>
  );
}
