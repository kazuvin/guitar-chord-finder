export default function arraysMatch(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}
