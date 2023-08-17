import { Equal, ExpectTrue, GreaterThan } from './utilities'

namespace at {
  type AtForwards<T extends unknown[], Index extends number, Count extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
      ? Count['length'] extends Index
        ? First
        : AtForwards<Rest, Index, [...Count, First]>
      : undefined

  type Test = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard']

  type testAtForwards1 = AtForwards<Test, 1>
  type resAtForwards1 = ExpectTrue<Equal<testAtForwards1, 'ivysaur'>>
  type testAtForwards2 = AtForwards<Test, 4>
  type resAtForwards2 = ExpectTrue<Equal<testAtForwards2, 'charmeleon'>>
  type testAtForwards3 = AtForwards<Test, 100>
  type resAtForwards3 = ExpectTrue<Equal<testAtForwards3, undefined>>
}