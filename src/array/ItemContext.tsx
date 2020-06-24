import React, { createContext, PropsWithChildren, useContext } from 'react';

export type ItemContextType<V> = V;
export const ItemContext = createContext<ItemContextType<any> | undefined>(
  undefined,
);

export function useItemContext<V>(value?: V): ItemContextType<V> {
  const context = useContext(ItemContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error(
      'useItemContext must be used inside the <ItemContextProvider/>',
    );
  }
  return context;
}

interface OwnProps<V> {
  value: ItemContextType<V>;
}

type Props<V> = PropsWithChildren<OwnProps<V>>;

export function ItemContextProvider<V>(props: Props<V>) {
  return (
    <ItemContext.Provider value={props.value}>
      {props.children}
    </ItemContext.Provider>
  );
}
