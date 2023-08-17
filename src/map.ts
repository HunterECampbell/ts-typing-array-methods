import type { Equal, Expect } from './utilities'

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

  type testMapPokeNames1 = MapPokeNames<Test>
  type resMapPokeNames11 = Expect<Equal<testMapPokeNames1, ['bulbasaur', 'ivysaur', 'venusaur']>>

  type testMapPokeIDs1 = MapPokeIDs<Test>
  type resMapPokeIDs1 = Expect<Equal<testMapPokeIDs1, [1, 2, 3]>>

  type testMapPokeTuple1 = MapPokeTuple<Test>
  type resMapPokeTuple1 = Expect<Equal<testMapPokeTuple1, [['bulbasaur', 1], ['ivysaur', 2], ['venusaur', 3]]>>
}
