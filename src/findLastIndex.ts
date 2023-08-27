import { Equal, Expect, GreaterThan, IsNum, IsStr, Minus } from './utilities'

namespace findLastIndex {
  type FindLastIndexOfNum<T extends unknown[], Count extends unknown[] = [...T]> =
    T extends [...infer First, infer Last]
      ? IsNum<Last> extends true
        ? Minus<Count['length'], 1>
        : FindLastIndexOfNum<First>
      : -1

  type FindLastIndexOfStr<T extends unknown[], Count extends unknown[] = [...T]> =
    T extends [...infer First, infer Last]
      ? IsStr<Last> extends true
        ? Minus<Count['length'], 1>
        : FindLastIndexOfStr<First>
      : -1

  type FindLastIndexOfGreaterThan<
    T extends unknown[],
    CompareN extends number,
    Count extends unknown[] = [...T]
  > =
    T extends [...infer First, infer Last]
      ? Last extends number
        ? GreaterThan<Last, CompareN> extends true
          ? Minus<Count['length'], 1>
          : FindLastIndexOfGreaterThan<First, CompareN>
        : FindLastIndexOfGreaterThan<First, CompareN>
      : -1

  type testFindLastIndexOfNum1 = FindLastIndexOfNum<['a', 1, 'b', 2, 'c', 3]>
  type resFindLastIndexOfNum1 = Expect<Equal<testFindLastIndexOfNum1, 5>>
  type testFindLastIndexOfNum2 = FindLastIndexOfNum<['a', 1, 'b', 2, 'c']>
  type resFindLastIndexOfNum2 = Expect<Equal<testFindLastIndexOfNum2, 3>>
  type testFindLastIndexOfNum3 = FindLastIndexOfNum<['a', 1, 'b', 'c']>
  type resFindLastIndexOfNum3 = Expect<Equal<testFindLastIndexOfNum3, 1>>
  type testFindLastIndexOfNum4 = FindLastIndexOfNum<['a', 'b', 'c']>
  type resFindLastIndexOfNum4 = Expect<Equal<testFindLastIndexOfNum4, -1>>

  type testFindLastIndexOfStr1 = FindLastIndexOfStr<[1, 'a', 2, 'b', 3, 'c']>
  type resFindLastIndexOfStr1 = Expect<Equal<testFindLastIndexOfStr1, 5>>
  type testFindLastIndexOfStr2 = FindLastIndexOfStr<[1, 'a', 2, 'b', 3]>
  type resFindLastIndexOfStr2 = Expect<Equal<testFindLastIndexOfStr2, 3>>
  type testFindLastIndexOfStr3 = FindLastIndexOfStr<[1, 'a', 2, 3]>
  type resFindLastIndexOfStr3 = Expect<Equal<testFindLastIndexOfStr3, 1>>
  type testFindLastIndexOfStr4 = FindLastIndexOfStr<[1, 2, 3]>
  type resFindLastIndexOfStr4 = Expect<Equal<testFindLastIndexOfStr4, -1>>

  type testFindLastIndexOfGreaterThan1 = FindLastIndexOfGreaterThan<['c', 3, 'b', 2, 'a', 1], 0>
  type resFindLastIndexOfGreaterThan1 = Expect<Equal<testFindLastIndexOfGreaterThan1, 5>>
  type testFindLastIndexOfGreaterThan2 = FindLastIndexOfGreaterThan<['c', 3, 'b', 2, 'a', 1], 1>
  type resFindLastIndexOfGreaterThan2 = Expect<Equal<testFindLastIndexOfGreaterThan2, 3>>
  type testFindLastIndexOfGreaterThan3 = FindLastIndexOfGreaterThan<['c', 3, 'b', 2, 'a', 1], 2>
  type resFindLastIndexOfGreaterThan3 = Expect<Equal<testFindLastIndexOfGreaterThan3, 1>>
  type testFindLastIndexOfGreaterThan4 = FindLastIndexOfGreaterThan<['c', 3, 'b', 2, 'a', 1], 100>
  type resFindLastIndexOfGreaterThan4 = Expect<Equal<testFindLastIndexOfGreaterThan4, -1>>
  type testFindLastIndexOfGreaterThan5 = FindLastIndexOfGreaterThan<['c', 'b', 'a'], 0>
  type resFindLastIndexOfGreaterThan5 = Expect<Equal<testFindLastIndexOfGreaterThan5, -1>>
}