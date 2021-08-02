import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type CurrentValue<V> = V;
export const CurrentValueContext: Context<CurrentValue<any> | undefined> =
  createContext<CurrentValue<any> | undefined>(undefined);

export function useCurrentValue<V>(value?: V): CurrentValue<V> {
  const context = useContext(CurrentValueContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error('useCurrentValue must be used inside the <ItemProvider/>');
  }
  return context;
}

interface ItemProviderOwnProps<V> {
  value: CurrentValue<V>;
}

export type CurrentValueProviderProps<V> = PropsWithChildren<
  ItemProviderOwnProps<V>
>;

export function CurrentValueProvider<V>(props: CurrentValueProviderProps<V>) {
  return (
    <CurrentValueContext.Provider value={props.value}>
      {props.children}
    </CurrentValueContext.Provider>
  );
}
