import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

export type Content<V> = V;
export const ContentContext: Context<Content<any> | undefined> = createContext<
  Content<any> | undefined
>(undefined);

export function useContent<V>(): Content<V> {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used inside the <ContentProvider/>');
  }
  return context;
}

interface ContentProviderOwnProps<V> {
  value: Content<V>;
}

export type ContentProviderProps<V> = PropsWithChildren<
  ContentProviderOwnProps<V>
>;

export function ContentProvider<V>(props: ContentProviderProps<V>) {
  return (
    <ContentContext.Provider value={props.value}>
      {props.children}
    </ContentContext.Provider>
  );
}
