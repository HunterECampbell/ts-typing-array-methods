import { Equal, Expect } from './utilities'

namespace reverse {
  type Reverse<T extends unknown[], Result extends unknown[] = []> =
    T extends [...infer First, infer Last]
      ? Reverse<First, [...Result, Last]>
      : Result

  type testReverse1 = Reverse<[1, 2, 3, 4, 5]>
  type resReverse1 = Expect<Equal<testReverse1, [5, 4, 3, 2, 1]>>
  type testReverse2 = Reverse<['a', 'b', 'c', 'd', 'e']>
  type resReverse2 = Expect<Equal<testReverse2, ['e', 'd', 'c', 'b', 'a']>>
  type testReverse3 = Reverse<[{ id: 1 }, { id: 2 }, { id: 3 }]>
  type resReverse3 = Expect<Equal<testReverse3, [{ id: 3 }, { id: 2 }, { id: 1 }]>>
  type testReverse4 = Reverse<[]>
  type resReverse4 = Expect<Equal<testReverse4, []>>
}