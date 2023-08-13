import type { Equal, Expect } from './index'

namespace map {
  type GetName<Poke> = Poke extends { name: infer Name } ? Name : '';
  type GetID<Poke> = Poke extends { id: infer ID } ? ID : 0

  type MapPokeNames<Tuple extends any[]> =
    Tuple extends [infer First, ...infer Rest]
      ? [GetName<First>, ...MapPokeNames<Rest>]
      : []

  type MapPokeIDs<Tuple extends any[]> =
    Tuple extends [infer First, ...infer Rest]
      ? [GetID<First>, ...MapPokeIDs<Rest>]
      : []

  type MapPokeTuple<Tuple extends any[]> =
    Tuple extends [infer First, ...infer Rest]
      ? [[GetName<First>, GetID<First>], ...MapPokeTuple<Rest>]
      : []

  type Test = [
    { name: 'bulbasaur', id: 1 },
    { name: 'ivysaur', id: 2 },
    { name: 'venusaur', id: 3 },
  ]

  type res1 = MapPokeNames<Test>
  type test1 = Expect<Equal<res1, ['bulbasaur', 'ivysaur', 'venusaur']>>

  type res2 = MapPokeIDs<Test>
  type test2 = Expect<Equal<res2, [1, 2, 3]>>

  type res3 = MapPokeTuple<Test>
  type test3 = Expect<Equal<res3, [['bulbasaur', 1], ['ivysaur', 2], ['venusaur', 3]]>>
}
