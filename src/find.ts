import { Equal, Expect } from './index'

namespace find {
  type Find<Tuple extends any[], Cond> =
    Tuple extends [infer First, ...infer Rest]
      ? First extends Cond
        ? First
        : Find<Rest, Cond>
      : undefined

  type Test = ['pikachu', 25, 'raichu', 26]

  type res1 = Find<Test, 25>
  type test1 = Expect<Equal<res1, 25>>

  type res2 = Find<Test, 'raichu'>
  type test2 = Expect<Equal<res2, 'raichu'>>
}