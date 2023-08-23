import { Equal, Expect, GreaterThan, IsNum, IsStr } from './utilities'

namespace findLast {
  type FindLastOfNum<T extends unknown[]> =
    T extends [...infer First, infer Last]
      ? IsNum<Last> extends true
        ? Last
        : FindLastOfNum<First>
      : undefined

  type FindLastOfStr<T extends unknown[]> =
    T extends [...infer First, infer Last]
      ? IsStr<Last> extends true
        ? Last
        : FindLastOfStr<First>
      : undefined

  type FindLastOfGreaterThan<T extends unknown[], CompareN extends number> =
    T extends [...infer First, infer Last]
      ? Last extends number
        ? GreaterThan<Last, CompareN> extends true
          ? Last
          : FindLastOfGreaterThan<First, CompareN>
        : FindLastOfGreaterThan<First, CompareN>
      : undefined

  type testFindLastOfNum1 = FindLastOfNum<[1, 'a', 2, 'b', 3, 'c']>
  type resFindLastOfNum1 = Expect<Equal<testFindLastOfNum1, 3>>
  type testFindLastOfNum2 = FindLastOfNum<[1, 'a', 2, 'b', 'c']>
  type resFindLastOfNum2 = Expect<Equal<testFindLastOfNum2, 2>>
  type testFindLastOfNum3 = FindLastOfNum<['a', 'b', 'c']>
  type resFindLastOfNum3 = Expect<Equal<testFindLastOfNum3, undefined>>

  type testFindLastOfStr1 = FindLastOfStr<[1, 'a', 2, 'b', 3, 'c']>
  type resFindLastOfStr1 = Expect<Equal<testFindLastOfStr1, 'c'>>
  type testFindLastOfStr2 = FindLastOfStr<[1, 'a', 2, 3]>
  type resFindLastOfStr2 = Expect<Equal<testFindLastOfStr2, 'a'>>
  type testFindLastOfStr3 = FindLastOfStr<[1, 2, 3]>
  type resFindLastOfStr3 = Expect<Equal<testFindLastOfStr3, undefined>>

  type testFindLastOfGreaterThan1 = FindLastOfGreaterThan<[3, 'c', 2, 'b', 1, 'a'], 2>
  type resFindLastOfGreaterThan1 = Expect<Equal<testFindLastOfGreaterThan1, 3>>
  type testFindLastOfGreaterThan2 = FindLastOfGreaterThan<[3, 'c', 2, 'b', 1, 'a'], 1>
  type resFindLastOfGreaterThan2 = Expect<Equal<testFindLastOfGreaterThan2, 2>>
  type testFindLastOfGreaterThan3 = FindLastOfGreaterThan<[3, 'c', 2, 'b', 1, 'a'], 0>
  type resFindLastOfGreaterThan3 = Expect<Equal<testFindLastOfGreaterThan3, 1>>
  type testFindLastOfGreaterThan4 = FindLastOfGreaterThan<['a', 'b', 'c'], 1>
  type resFindLastOfGreaterThan4 = Expect<Equal<testFindLastOfGreaterThan4, undefined>>
}