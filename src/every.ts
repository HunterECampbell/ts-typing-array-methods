import { Equal, Expect, GreaterThanOrEqualTo, IsNum, IsStr } from './utilities'

namespace every {
  type EveryNum<T extends unknown[], Result extends boolean = true, Count extends unknown[] = []> =
    [T['length'], Count['length']] extends [0, 0]
      ? false
      : T extends [infer First, ...infer Rest]
        ? Result extends true
          ? IsNum<First> extends true
            ? EveryNum<Rest, true, [...Count, First]>
            : EveryNum<Rest, false, [...Count, First]>
          : Result
        : Result

  type EveryStr<T extends unknown[], Result extends boolean = true, Count extends unknown[] = []> =
    [T['length'], Count['length']] extends [0, 0]
      ? false
      : T extends [infer First, ...infer Rest]
        ? Result extends true
          ? IsStr<First> extends true
            ? EveryStr<Rest, true, [...Count, First]>
            : EveryStr<Rest, false, [...Count, First]>
          : Result
        : Result

  type EveryGreaterThanOrEqual<
    T extends unknown[],
    CompareN extends number,
    Result extends boolean = true,
    Count extends unknown[] = []
  > =
    [T['length'], Count['length']] extends [0, 0]
      ? false
      : T extends [infer First, ...infer Rest]
        ? Result extends true
          ? First extends number
            ? GreaterThanOrEqualTo<First, CompareN> extends true
              ? EveryGreaterThanOrEqual<Rest, CompareN, true, [...Count, First]>
              : EveryGreaterThanOrEqual<Rest, CompareN, false, [...Count, First]>
            : EveryGreaterThanOrEqual<Rest, CompareN, false, [...Count, First]>
          : Result
        : Result

  type testEveryNum1 = EveryNum<[1, 2, 3]>
  type resEveryNum1 = Expect<Equal<testEveryNum1, true>>
  type testEveryNum2 = EveryNum<[4, 5, 6]>
  type resEveryNum2 = Expect<Equal<testEveryNum2, true>>
  type testEveryNum3 = EveryNum<['a', 'b', 'c']>
  type resEveryNum3 = Expect<Equal<testEveryNum3, false>>
  type testEveryNum4 = EveryNum<[1, 'a', 2, 'b', 3, 'c']>
  type resEveryNum4 = Expect<Equal<testEveryNum4, false>>
  type testEveryNum5 = EveryNum<[]>
  type resEveryNum5 = Expect<Equal<testEveryNum5, false>>

  type testEveryStr1 = EveryStr<['a', 'b', 'c']>
  type resEveryStr1 = Expect<Equal<testEveryStr1, true>>
  type testEveryStr2 = EveryStr<['this', 'is', 'a', 'test']>
  type resEveryStr2 = Expect<Equal<testEveryStr2, true>>
  type testEveryStr3 = EveryStr<[1, 2, 3]>
  type resEveryStr3 = Expect<Equal<testEveryStr3, false>>
  type testEveryStr4 = EveryStr<['a', 1, 'b', 2, 'c', 3]>
  type resEveryStr4 = Expect<Equal<testEveryStr4, false>>
  type testEveryStr5 = EveryStr<[]>
  type resEveryStr5 = Expect<Equal<testEveryStr5, false>>

  type testEveryGreaterThanOrEqual1 = EveryGreaterThanOrEqual<[5, 6, 7], 5>
  type resEveryGreaterThanOrEqual1 = Expect<Equal<testEveryGreaterThanOrEqual1, true>>
  type testEveryGreaterThanOrEqual2 = EveryGreaterThanOrEqual<[10, 11, 12, 13], 10>
  type resEveryGreaterThanOrEqual2 = Expect<Equal<testEveryGreaterThanOrEqual2, true>>
  type testEveryGreaterThanOrEqual3 = EveryGreaterThanOrEqual<[4, 5, 6, 7], 5>
  type resEveryGreaterThanOrEqual3 = Expect<Equal<testEveryGreaterThanOrEqual3, false>>
  type testEveryGreaterThanOrEqual4 = EveryGreaterThanOrEqual<[5, 6, 7, 4], 5>
  type resEveryGreaterThanOrEqual4 = Expect<Equal<testEveryGreaterThanOrEqual4, false>>
  type testEveryGreaterThanOrEqual5 = EveryGreaterThanOrEqual<['a', 4, 5, 6], 5>
  type resEveryGreaterThanOrEqual5 = Expect<Equal<testEveryGreaterThanOrEqual5, false>>
  type testEveryGreaterThanOrEqual6 = EveryGreaterThanOrEqual<[4, 5, 6, 'a'], 5>
  type resEveryGreaterThanOrEqual6 = Expect<Equal<testEveryGreaterThanOrEqual6, false>>
  type testEveryGreaterThanOrEqual7 = EveryGreaterThanOrEqual<[], 5>
  type resEveryGreaterThanOrEqual7 = Expect<Equal<testEveryGreaterThanOrEqual7, false>>
}