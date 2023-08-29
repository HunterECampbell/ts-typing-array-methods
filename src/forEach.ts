import { Equal, Expect } from './utilities'

namespace forEach {
  type ForEach<T extends unknown[], Result> =
    T extends [infer First, ...infer Rest]
      ? ForEach<Rest, Result | First>
      : Result

  type testForEach1 = ForEach<[1, 2, 3], never>
  type resForEach1 = Expect<Equal<testForEach1 extends 1 | 2 | 3 ? true : false, true>>
  type testForEach2 = ForEach<['a', 'b', 'c'], never>
  type resForEach2 = Expect<Equal<testForEach2 extends 'a' | 'b' | 'c' ? true : false, true>>
  type testForEach3 = ForEach<[1, 'a', { id: 1 }], never>
  type resForEach3 = Expect<Equal<testForEach3 extends 1 | 'a' | { id: 1 } ? true : false, true>>
  type testForEach4 = ForEach<[], never>
  type resForEach4 = Expect<Equal<testForEach4, never>>
}