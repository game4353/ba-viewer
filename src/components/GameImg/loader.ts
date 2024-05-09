const glob = import.meta.glob("~assets/UIs/**/*.png", {
  eager: true,
  import: "default",
});
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    key
      .match(/(UIs.+)\.png/)
      ?.at(1)
      ?.toLowerCase() ?? "",
    value as string,
  ]),
);
export function uiPath(path: string) {
  return images[path.toLowerCase()] ?? "";
}
