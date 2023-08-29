import { Equal, Expect } from './utilities'

namespace push {
  type Push<T extends unknown[], Value> = [...T, Value]

  type testPush1 = Push<[], 1>
  type resPush1 = Expect<Equal<testPush1, [1]>>
  type testPush2 = Push<testPush1, 1>
  type resPush2 = Expect<Equal<testPush2, [1, 1]>>
  type testPush3 = Push<testPush2, 1>
  type resPush3 = Expect<Equal<testPush3, [1, 1, 1]>>
  type testPush4 = Push<testPush3, 2>
  type resPush4 = Expect<Equal<testPush4, [1, 1, 1, 2]>>
  type testPush5 = Push<testPush4, { id: 1 }>
  type resPush5 = Expect<Equal<testPush5, [1, 1, 1, 2, { id: 1 }]>>
  type testPush6 = Push<testPush5, 'a'>
  type resPush6 = Expect<Equal<testPush6, [1, 1, 1, 2, { id: 1 }, 'a']>>
}