export const wait = (timeout = 1000) => new Promise(res => setTimeout(res, timeout));

export function debounce(this: unknown, fn: (...a: unknown[]) => unknown, timeout = 200) {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
}
