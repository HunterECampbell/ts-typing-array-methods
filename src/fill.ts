import { Equal, Expect, GreaterThanOrEqualTo, LessThan } from './utilities'

namespace fill {
  type Fill<
    T extends unknown[],
    Value,
    StartingIndex extends number = 0,
    EndingIndex extends number = T['length'],
    CurrentIndex extends unknown[] = [],
    Result extends unknown[] = []
  > =
    [T['length'], CurrentIndex['length']] extends [0, 0]
      ? []
      : T extends [infer First, ...infer Rest]
        ? GreaterThanOrEqualTo<CurrentIndex['length'], StartingIndex> extends true
          ? LessThan<CurrentIndex['length'], EndingIndex> extends true
            ? Fill<Rest, Value, StartingIndex, EndingIndex, [...CurrentIndex, First], [...Result, Value]>
            : Fill<Rest, Value, StartingIndex, EndingIndex, [...CurrentIndex, First], [...Result, First]>
          : Fill<Rest, Value, StartingIndex, EndingIndex, [...CurrentIndex, First], [...Result, First]>
        : Result

  type Test = [1, 2, 3, 4]

  type testFill1 = Fill<Test, 0, 2, 4>
  type resFill1 = Expect<Equal<testFill1, [1, 2, 0, 0]>>
  type testFill2 = Fill<Test, 5, 1>
  type resFill2 = Expect<Equal<testFill2, [1, 5, 5, 5]>>
  type testFill3 = Fill<Test, 6>
  type resFill3 = Expect<Equal<testFill3, [6, 6, 6, 6]>>
  type testFill4 = Fill<Test, { id: 1 }, 2>
  type resFill4 = Expect<Equal<testFill4, [1, 2, { id: 1 }, { id: 1 }]>>
  type testFill5 = Fill<Test, 10, 1, 2>
  type resFill5 = Expect<Equal<testFill5, [1, 10, 3, 4]>>
  type testFill6 = Fill<[], 1, 2>
  type resFill6 = Expect<Equal<testFill6, []>>
}