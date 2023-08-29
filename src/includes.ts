import { Equal, Expect } from './utilities'

namespace includes {
  type Includes<T extends unknown[], Value, Result extends boolean = false> =
    Result extends true
      ? Result
      : T extends [infer First, ...infer Rest]
        ? First extends Value
          ? Includes<Rest, Value, true>
          : Includes<Rest, Value, false>
        : Result

  type testIncludes1 = Includes<[1, 2, 3], 2>
  type resIncludes1 = Expect<Equal<testIncludes1, true>>
  type testIncludes2 = Includes<[1, 2, 3], 5>
  type resIncludes2 = Expect<Equal<testIncludes2, false>>
  type testIncludes3 = Includes<[1, 'a', 2, 'b', 3, 'c'], 'a'>
  type resIncludes3 = Expect<Equal<testIncludes1, true>>
  type testIncludes4 = Includes<[1, 'a', 2, 'b', 3, 'c'], 'c'>
  type resIncludes4 = Expect<Equal<testIncludes4, true>>
  type testIncludes5 = Includes<[], 2>
  type resIncludes5 = Expect<Equal<testIncludes5, false>>
}