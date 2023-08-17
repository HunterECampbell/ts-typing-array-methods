import type { Equal, ExpectTrue } from './utilities'

namespace filter {
  type Filter<Tuple extends unknown[], Cond extends number | string> =
    Tuple extends [infer First, ...infer Rest]
      ? First extends Cond
        ? [First, ...Filter<Rest, Cond>]
        : Filter<Rest, Cond>
      : []

  type Test = ['charmander', 3, 4, 'charizard', 'charmeleon', 8]

  type testFilter1 = Filter<Test, string>
  type resFilter1 = ExpectTrue<Equal<testFilter1, ['charmander', 'charizard', 'charmeleon']>>
  type testFilter2 = Filter<Test, number>
  type resFilter2 = ExpectTrue<Equal<testFilter2, [3, 4, 8]>>
}