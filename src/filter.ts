import type { Equal, Expect } from './index'

namespace filter {
  type Filter<Tuple extends any[], Cond extends number | string> =
    Tuple extends [infer First, ...infer Rest]
      ? First extends Cond
        ? [First, ...Filter<Rest, Cond>]
        : Filter<Rest, Cond>
      : []

  type Test = ['charmander', 3, 4, 'charizard', 'charmeleon', 8]

  type res1 = Filter<Test, string>
  type test1 = Expect<Equal<res1, ['charmander', 'charizard', 'charmeleon']>>

  type res2 = Filter<Test, number>
  type test2 = Expect<Equal<res2, [3, 4, 8]>>
}