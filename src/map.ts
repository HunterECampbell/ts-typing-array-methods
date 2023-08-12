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
  type PokeIDs = MapPokeIDs<Pokemon>
  type PokeTuples = MapPokeTuple<Pokemon>
}
