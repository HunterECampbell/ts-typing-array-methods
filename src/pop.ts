import { Equal, Expect } from './utilities'

namespace pop {
  type Pop<T extends unknown[]> =
    T extends [...infer First, infer _]
      ? [...First]
      : []

  type testPop1 = Pop<[1, 2, 3, 4, 5]>
  type resPop1 = Expect<Equal<testPop1, [1, 2, 3, 4]>>
  type testPop2 = Pop<testPop1>
  type resPop2 = Expect<Equal<testPop2, [1, 2, 3]>>
  type testPop3 = Pop<testPop2>
  type resPop3 = Expect<Equal<testPop3, [1, 2]>>
  type testPop4 = Pop<testPop3>
  type resPop4 = Expect<Equal<testPop4, [1]>>
  type testPop5 = Pop<testPop4>
  type resPop5 = Expect<Equal<testPop5, []>>
  type testPop6 = Pop<[]>
  type resPop6 = Expect<Equal<testPop6, []>>
}