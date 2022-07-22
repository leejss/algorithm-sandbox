export default function isInArray<T>(val: T, arr: T[]) {
  const idx = arr.findIndex((v) => v === val);
  return idx === -1 ? false : true;
}
