import type { Expect, Equal } from './index'

namespace map {
  type Pokemon = [
    { name: 'bulbasaur', id: 1 },
    { name: 'ivysaur', id: 2 },
    { name: 'venusaur', id: 3 },
  ]

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

  type PokeNames = MapPokeNames<Pokemon>
  type test1 = Expect<Equal<PokeNames, ['bulbasaur', 'ivysaur', 'venusaur']>>

  type PokeIDs = MapPokeIDs<Pokemon>
  type test2 = Expect<Equal<PokeIDs, [1, 2, 3]>>

  type PokeTuples = MapPokeTuple<Pokemon>
  type test3 = Expect<Equal<PokeTuples, [['bulbasaur', 1], ['ivysaur', 2], ['venusaur', 3]]>>
}
