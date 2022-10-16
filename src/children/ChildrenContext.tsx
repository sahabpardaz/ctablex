import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'react';

export type ChildrenContextType = ReactNode;
export const ChildrenContext = createContext<ChildrenContextType>(undefined);

export function useChildren(): ChildrenContextType {
  return useContext(ChildrenContext);
}

interface ChildrenProviderOwnProps {
  value: ChildrenContextType;
}

type ChildrenProviderProps = PropsWithChildren<ChildrenProviderOwnProps>;

export function ChildrenProvider(props: ChildrenProviderProps) {
  return (
    <ChildrenContext.Provider value={props.value}>
      {props.children}
    </ChildrenContext.Provider>
  );
}
