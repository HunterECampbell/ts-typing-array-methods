import type { Equal, ExpectTrue } from './utilities'

namespace map {
  type GetName<Poke> = Poke extends { name: infer Name } ? Name : '';
  type GetID<Poke> = Poke extends { id: infer ID } ? ID : 0

  type MapPokeNames<Tuple extends unknown[]> =
    Tuple extends [infer First, ...infer Rest]
      ? [GetName<First>, ...MapPokeNames<Rest>]
      : []

  type MapPokeIDs<Tuple extends unknown[]> =
    Tuple extends [infer First, ...infer Rest]
      ? [GetID<First>, ...MapPokeIDs<Rest>]
      : []

  type MapPokeTuple<Tuple extends unknown[]> =
    Tuple extends [infer First, ...infer Rest]
      ? [[GetName<First>, GetID<First>], ...MapPokeTuple<Rest>]
      : []

  type Test = [
    { name: 'bulbasaur', id: 1 },
    { name: 'ivysaur', id: 2 },
    { name: 'venusaur', id: 3 },
  ]

  type testMapPokeNames1 = MapPokeNames<Test>
  type resMapPokeNames11 = ExpectTrue<Equal<testMapPokeNames1, ['bulbasaur', 'ivysaur', 'venusaur']>>

  type testMapPokeIDs1 = MapPokeIDs<Test>
  type resMapPokeIDs1 = ExpectTrue<Equal<testMapPokeIDs1, [1, 2, 3]>>

  type testMapPokeTuple1 = MapPokeTuple<Test>
  type resMapPokeTuple1 = ExpectTrue<Equal<testMapPokeTuple1, [['bulbasaur', 1], ['ivysaur', 2], ['venusaur', 3]]>>
}
