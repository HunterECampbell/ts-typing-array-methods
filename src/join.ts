import { Equal, Expect, StrLiteral } from './utilities'

namespace join {
  type Join<T extends unknown[], Separator extends string = ',', Result extends string = ''> =
    T extends [infer First extends StrLiteral, ...infer Rest]
      ? Rest['length'] extends 0
        ? `${Result}${First}`
        : Join<Rest, Separator, `${Result}${First}${Separator}`>
      : Result

  type testJoin1 = Join<['a', 'b', 'c'], ''>
  type resJoin1 = Expect<Equal<testJoin1, 'abc'>>
  type testJoin2 = Join<['a', 'b', 'c'], ' '>
  type resJoin2 = Expect<Equal<testJoin2, 'a b c'>>
  type testJoin3 = Join<['a', 'b', 'c'], '-'>
  type resJoin3 = Expect<Equal<testJoin3, 'a-b-c'>>
  type testJoin4 = Join<[1, 2, 3], '.'>
  type resJoin4 = Expect<Equal<testJoin4, '1.2.3'>>
  type testJoin5 = Join<[1, 2, 3]>
  type resJoin5 = Expect<Equal<testJoin5, '1,2,3'>>
  type testJoin6 = Join<[1, 2, 3], '{ id: 1 }'>
  type resJoin6 = Expect<Equal<testJoin6, '1{ id: 1 }2{ id: 1 }3'>>
  type testJoin7 = Join<[], '5'>
  type resJoin7 = Expect<Equal<testJoin7, ''>>
}