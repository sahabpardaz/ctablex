import { ComponentType } from 'react';

export function getDisplayName(
  WrappedComponent: ComponentType<any> | keyof JSX.IntrinsicElements,
): string {
  if (
    typeof WrappedComponent === 'symbol' ||
    typeof WrappedComponent === 'string'
  ) {
    return WrappedComponent.toString();
  }
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
