import { IsNum, LastInNumArr, ZeroToXArr } from './index'

export type Equal<X, Y> =
  X extends Y
    ? Y extends X
      ? true
      : false
    : false;

export type ExpectTrue<T extends true> = T;

export type GreaterThan<N extends number, CompareN extends number> =
  IsNum<
    [...ZeroToXArr<CompareN>][LastInNumArr<[...ZeroToXArr<N>]>]
  > extends true ? false : true

type testGreaterThan1 = GreaterThan<10, 11>
type resGreaterThan1 = ExpectTrue<Equal<testGreaterThan1, false>>
type testGreaterThan2 = GreaterThan<11, 11>
type resGreaterThan2 = ExpectTrue<Equal<testGreaterThan2, false>>
type testGreaterThan3 = GreaterThan<12, 11>
type resGreaterThan3 = ExpectTrue<Equal<testGreaterThan3, true>>