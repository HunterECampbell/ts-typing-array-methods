import { Equal, Expect, Minus, ZeroToXArr } from './utilities'

namespace reduce {
  type ReduceAddPositives<
    T extends number[],
    InitialValue extends number,
    Total extends number = InitialValue
  > =
    T extends [infer First extends number, ...infer Rest extends number[]]
      ? [...ZeroToXArr<First>, ...ZeroToXArr<Total>]['length'] extends number
        ? ReduceAddPositives<Rest, Total, Minus<[...ZeroToXArr<First>, ...ZeroToXArr<Total>]['length'], 2>>
        : never
      : Total

  type testReduceAddPositives1 = ReduceAddPositives<[1, 2, 3], 0>
  type resReduceAddPositives1 = Expect<Equal<testReduceAddPositives1, 6>>
  type testReduceAddPositives2 = ReduceAddPositives<[5, 6, 7], 0>
  type resReduceAddPositives2 = Expect<Equal<testReduceAddPositives2, 18>>
  type testReduceAddPositives3 = ReduceAddPositives<[100, 200, 300], 0>
  type resReduceAddPositives3 = Expect<Equal<testReduceAddPositives3, 600>>
  type testReduceAddPositives4 = ReduceAddPositives<[], 0>
  type resReduceAddPositives4 = Expect<Equal<testReduceAddPositives4, 0>>
  type testReduceAddPositives5 = ReduceAddPositives<[1, 2, 3], 5>
  type resReduceAddPositives5 = Expect<Equal<testReduceAddPositives5, 11>>
}