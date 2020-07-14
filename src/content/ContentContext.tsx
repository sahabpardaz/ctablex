import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type ContentContextType<V> = V;
export const ContentContext: Context<
  ContentContextType<any> | undefined
> = createContext<ContentContextType<any> | undefined>(undefined);

export function useContent<V>(): ContentContextType<V> {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error(
      'useContent must be used inside the <ContentContextProvider/>',
    );
  }
  return context;
}

interface ContentContextProviderOwnProps<V> {
  value: ContentContextType<V>;
}

export type ContentContextProviderProps<V> = PropsWithChildren<
  ContentContextProviderOwnProps<V>
>;

export function ContentContextProvider<V>(
  props: ContentContextProviderProps<V>,
) {
  return (
    <ContentContext.Provider value={props.value}>
      {props.children}
    </ContentContext.Provider>
  );
}
