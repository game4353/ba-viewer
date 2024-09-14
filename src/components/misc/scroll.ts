export function isScrollTop(element: HTMLElement): boolean {
  return element.scrollTop < 1;
}

export function isScrollEnd(element: HTMLElement): boolean {
  return element.scrollTop + 1 > element.scrollHeight - element.clientHeight;
}
