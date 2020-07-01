import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type ItemContextType<V> = V;
export const ItemContext: Context<
  ItemContextType<any> | undefined
> = createContext<ItemContextType<any> | undefined>(undefined);

export function useItem<V>(value?: V): ItemContextType<V> {
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

interface ItemContextProviderOwnProps<V> {
  value: ItemContextType<V>;
}

export type ItemContextProviderProps<V> = PropsWithChildren<
  ItemContextProviderOwnProps<V>
>;

export function ItemContextProvider<V>(props: ItemContextProviderProps<V>) {
  return (
    <ItemContext.Provider value={props.value}>
      {props.children}
    </ItemContext.Provider>
  );
}
