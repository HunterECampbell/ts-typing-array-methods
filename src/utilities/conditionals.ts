import { Equal, Expect, IsNum, LastInNumArr, ZeroToXArr } from './index'

export type GreaterThan<N extends number, CompareN extends number> =
  IsNum<
    [...ZeroToXArr<CompareN>][LastInNumArr<[...ZeroToXArr<N>]>]
  > extends true ? false : true

type testGreaterThan1 = GreaterThan<10, 11>
type resGreaterThan1 = Expect<Equal<testGreaterThan1, false>>
type testGreaterThan2 = GreaterThan<11, 11>
type resGreaterThan2 = Expect<Equal<testGreaterThan2, false>>
type testGreaterThan3 = GreaterThan<12, 11>
type resGreaterThan3 = Expect<Equal<testGreaterThan3, true>>