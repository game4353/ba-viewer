export type ScaleOption = {
  /** ratio */
  r?: number;
  /** width */
  w?: number;
  /** height */
  h?: number;
  /** type */
  t?: "min" | "max";
};

export function calcScale(
  width: number,
  height: number,
  option: ScaleOption = {},
) {
  const arr = [];
  if (option.w != null) arr.push(option.w / width);
  if (option.h != null) arr.push(option.h / height);
  if (option.r != null) arr.push(option.r);
  if (arr.length === 0) return 1;
  if (option.t === "max") return Math.max(...arr);
  return Math.min(...arr);
}
