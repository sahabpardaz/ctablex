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
    throw new Error('useContent must be used inside the <ContentProvider/>');
  }
  return context;
}

interface ContentProviderOwnProps<V> {
  value: ContentContextType<V>;
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
