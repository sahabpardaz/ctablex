import React, { ReactElement } from 'react';

const isTold: Record<string, boolean> = {};

export function addProps(
  el: ReactElement,
  props: object | undefined,
  names: { prop: string; el: string },
) {
  if (props === undefined) {
    return el;
  }
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    const key = `${names.prop},${names.el}`;
    if (!isTold[key]) {
      isTold[key] = true;
      console.error(`${names.prop} is deprecated, use ${names.el} instead`);
    }
  }
  return React.cloneElement(el, props);
}
