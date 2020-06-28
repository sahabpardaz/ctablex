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
      'useContentContext must be used inside the <ContentContextProvider/>',
    );
  }
  return context;
}

interface OwnProps<V> {
  value: ContentContextType<V>;
}

export type Props<V> = PropsWithChildren<OwnProps<V>>;

export function ContentContextProvider<V>(props: Props<V>) {
  return (
    <ContentContext.Provider value={props.value}>
      {props.children}
    </ContentContext.Provider>
  );
}
