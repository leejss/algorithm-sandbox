import genRandInt from "./genRandInt";
import isInArray from "./isInArray";

export default function genRandIntArray(
  len: number,
  min: number = 1,
  max: number = 100
): number[] {
  const result: number[] = [];
  while (result.length !== len) {
    const rand = genRandInt(min, max);
    if (isInArray(rand, result)) continue;
    else result.push(rand);
  }
  return result;
}
