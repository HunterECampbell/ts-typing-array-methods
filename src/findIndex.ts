import { Equal, Expect, GreaterThan, IsNum, IsStr } from './utilities'

namespace findIndex {
  type FindIndexOfNumber<T extends unknown[], Count extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
      ? IsNum<First> extends true
        ? Count['length']
        : FindIndexOfNumber<Rest, [...Count, First]>
      : -1

  type FindIndexOfString<T extends unknown[], Count extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
      ? IsStr<First> extends true
        ? Count['length']
        : FindIndexOfString<Rest, [...Count, First]>
      : -1

  type FindIndexOfGreaterThan<T extends unknown[], Cond extends number, Count extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
      ? First extends number
        ? GreaterThan<First, Cond> extends true
          ? Count['length']
          : FindIndexOfGreaterThan<Rest, Cond, [...Count, First]>
        : FindIndexOfGreaterThan<Rest, Cond, [...Count, First]>
      : -1

  type testFindIndexOfNumber1 = FindIndexOfNumber<[1, 'a', 2, 'b', 3, 'c']>
  type resFindIndexOfNumber1 = Expect<Equal<testFindIndexOfNumber1, 0>>
  type testFindIndexOfNumber2 = FindIndexOfNumber<['a', 2, 'b', 3, 'c']>
  type resFindIndexOfNumber2 = Expect<Equal<testFindIndexOfNumber2, 1>>
  type testFindIndexOfNumber3 = FindIndexOfNumber<['a', 'b', 'c']>
  type resFindIndexOfNumber3 = Expect<Equal<testFindIndexOfNumber3, -1>>

  type testFindIndexOfString1 = FindIndexOfString<[1, 'a', 2, 'b', 3, 'c']>
  type resFindIndexOfString1 = Expect<Equal<testFindIndexOfString1, 1>>
  type testFindIndexOfString2 = FindIndexOfString<['a', 2, 'b', 3, 'c']>
  type resFindIndexOfString2 = Expect<Equal<testFindIndexOfString2, 0>>
  type testFindIndexOfString3 = FindIndexOfString<[1, 2, 3]>
  type resFindIndexOfString3 = Expect<Equal<testFindIndexOfString3, -1>>

  type testFindIndexOfGreaterThan1 = FindIndexOfGreaterThan<[1, 'a', 2, 'b', 3, 'c'], 2>
  type resFindIndexOfGreaterThan1 = Expect<Equal<testFindIndexOfGreaterThan1, 4>>
  type testFindIndexOfGreaterThan2 = FindIndexOfGreaterThan<[1, 'a', 2, 'b', 3, 'c'], 0>
  type resFindIndexOfGreaterThan2 = Expect<Equal<testFindIndexOfGreaterThan2, 0>>
  type testFindIndexOfGreaterThan3 = FindIndexOfGreaterThan<[1, 'a', 2, 'b', 3, 'c'], 100>
  type resFindIndexOfGreaterThan3 = Expect<Equal<testFindIndexOfGreaterThan3, -1>>
}