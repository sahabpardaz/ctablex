export function path<T, O>(path: string[], obj: O): T {
  let current: any = obj;
  path.forEach((prop) => {
    current = current?.[prop];
  });
  return current;
}
