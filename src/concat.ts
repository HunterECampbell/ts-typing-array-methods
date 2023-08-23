import { Equal, Expect } from './utilities'

namespace concat {
  type Concat<Start extends unknown[], Tuples extends unknown[][], Output extends unknown[] = [...Start]> =
    Tuples extends [infer First extends unknown[], ...infer Rest extends unknown[][]]
      ? Concat<Output, Rest, [...Output, ...First]>
      : Output

  type testConcat1 = Concat<[1, 2], [[3, 4]]>
  type resConcat1 = Expect<Equal<testConcat1, [1, 2, 3, 4]>>
  type testConcat2 = Concat<['a', 'b', 'c'], [['d', 'e'], ['f']]>
  type resConcat2 = Expect<Equal<testConcat2, ['a', 'b', 'c', 'd', 'e', 'f']>>
  type testConcat3 = Concat<[{ name: 'Bob', id: 1 }, { name: 'Billy', id: 2 }], [[1], ['a', 'b']]>
  type resConcat3 = Expect<Equal<testConcat3, [{ name: 'Bob', id: 1 }, { name: 'Billy', id: 2 }, 1, 'a', 'b']>>
}