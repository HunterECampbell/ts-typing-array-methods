import { ConvertToPositive, Equal, ExpectTrue, IsPositiveNum } from './utilities'

namespace at {
  type AtForwards<T extends unknown[], Index extends number, Count extends unknown[] = []> =
    IsPositiveNum<Index> extends true
      ? T extends [infer First, ...infer Rest]
        ? Count['length'] extends Index
          ? First
          : AtForwards<Rest, Index, [...Count, First]>
        : undefined
      : undefined

  type AtBackwards<T extends unknown[], Index extends number, Count extends unknown[] = [1]> =
    IsPositiveNum<Index> extends false
      ? T extends [...infer First, infer Last]
        ? Count['length'] extends ConvertToPositive<Index>
          ? Last
          : AtBackwards<First, Index, [...Count, Last]>
        : undefined
      : undefined

  type At<T extends unknown[], Index extends number> =
    IsPositiveNum<Index> extends true
      ? AtForwards<T, Index>
      : AtBackwards<T, Index>

  type Test = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard']

  type testAt1 = At<Test, 1>
  type resAt1 = ExpectTrue<Equal<testAt1, 'ivysaur'>>
  type testAt2 = At<Test, 4>
  type resAt2 = ExpectTrue<Equal<testAt2, 'charmeleon'>>
  type testAt3 = At<Test, -1>
  type resAt3 = ExpectTrue<Equal<testAt3, 'charizard'>>
  type testAt4 = At<Test, -4>
  type resAt4 = ExpectTrue<Equal<testAt4, 'venusaur'>>
  type testAt5 = At<Test, 100>
  type resAt5 = ExpectTrue<Equal<testAt5, undefined>>
  type testAt6 = At<Test, -100>
  type resAt6 = ExpectTrue<Equal<testAt6, undefined>>
}