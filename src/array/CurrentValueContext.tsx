import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type CurrentValueContextType<V> = V;
export const CurrentValueContext: Context<
  CurrentValueContextType<any> | undefined
> = createContext<CurrentValueContextType<any> | undefined>(undefined);

export function useCurrentValue<V>(value?: V): CurrentValueContextType<V> {
  const context = useContext(CurrentValueContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error(
      'useCurrentValue must be used inside the <ItemContextProvider/>',
    );
  }
  return context;
}

interface ItemContextProviderOwnProps<V> {
  value: CurrentValueContextType<V>;
}

export type CurrentValueContextProviderProps<V> = PropsWithChildren<
  ItemContextProviderOwnProps<V>
>;

export function CurrentValueContextProvider<V>(
  props: CurrentValueContextProviderProps<V>,
) {
  return (
    <CurrentValueContext.Provider value={props.value}>
      {props.children}
    </CurrentValueContext.Provider>
  );
}
