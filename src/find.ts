import { Equal, ExpectTrue, GreaterThan } from './utilities'

namespace find {
  type Find<Tuple extends unknown[], Cond> =
    Tuple extends [infer First, ...infer Rest]
      ? First extends Cond
        ? First
        : Find<Rest, Cond>
      : undefined

  type FindGreaterThan<Tuple extends unknown[], N extends number> =
    Tuple extends [infer First, ...infer Rest]
      ? First extends number
        ? GreaterThan<First, N> extends true
          ? First
          : FindGreaterThan<Rest, N>
        : FindGreaterThan<Rest, N>
      : undefined

  type Test = ['pikachu', 25, 'raichu', 26]

  type testFind1 = Find<Test, 25>
  type resFind1 = ExpectTrue<Equal<testFind1, 25>>
  type testFind2 = Find<Test, 'raichu'>
  type resFind2 = ExpectTrue<Equal<testFind2, 'raichu'>>

  type testFindGreaterThan1 = FindGreaterThan<Test, 24>
  type resFindGreaterThan1 = ExpectTrue<Equal<testFindGreaterThan1, 25>>
  type testFindGreaterThan2 = FindGreaterThan<Test, 25>
  type resFindGreaterThan2 = ExpectTrue<Equal<testFindGreaterThan2, 26>>
}