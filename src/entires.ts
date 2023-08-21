import { Equal, ExpectTrue } from './utilities';

namespace entries {
  type Entries<T extends unknown[], Output extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
      ? Entries<Rest, [...Output, [Output['length'], First]]>
      : Output

  type testEntries1 = Entries<[1, 2, 3]>
  type resEntries1 = ExpectTrue<Equal<testEntries1, [[0, 1], [1, 2], [2, 3]]>>
  type testEntries2 = Entries<['a', 'b', 'c']>
  type resEntries2 = ExpectTrue<Equal<testEntries2, [[0, 'a'], [1, 'b'], [2, 'c']]>>
  type testEntries3 = Entries<[{ name: 'Bob' }, { name: 'Billy' }, { name: 'Frank' }]>
  type resEntries3 = ExpectTrue<Equal<testEntries3, [[0, { name: 'Bob' }], [1, { name: 'Billy' }], [2, { name: 'Frank' }]]>>
}