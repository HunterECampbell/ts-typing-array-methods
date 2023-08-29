import { Equal, Expect } from './utilities'

namespace indexOf {
  type IndexOf<T extends unknown[], Value, CurrentIndex extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
      ? First extends Value
        ? CurrentIndex['length']
        : IndexOf<Rest, Value, [...CurrentIndex, First]>
      : -1

  type Test = [1, 'a', 2, 'b', 3, 'c', { id: 1 }]

  type testIndexOf1 = IndexOf<Test, 1>
  type resIndexOf1 = Expect<Equal<testIndexOf1, 0>>
  type testIndexOf2 = IndexOf<Test, { id: 1 }>
  type resIndexOf2 = Expect<Equal<testIndexOf2, 6>>
  type testIndexOf3 = IndexOf<Test, 'b'>
  type resIndexOf3 = Expect<Equal<testIndexOf3, 3>>
  type testIndexOf4 = IndexOf<Test, 'missing'>
  type resIndexOf4 = Expect<Equal<testIndexOf4, -1>>
  type testIndexOf5 = IndexOf<[], 1>
  type resIndexOf5 = Expect<Equal<testIndexOf5, -1>>
}