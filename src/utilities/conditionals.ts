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

// export type GreaterThanOrEqualTo<N extends number, CompareN extends number> =
//   Equal<ZeroToXArr<N>, ZeroToXArr<CompareN>> extends false
//     ? GreaterThan<N, CompareN> extends true
//       ? true
//       : false
//     : true

// type testGreaterThanOrEqualTo1 = GreaterThanOrEqualTo<10, 11>
// type resGreaterThanOrEqualTo1 = ExpectTrue<Equal<testGreaterThanOrEqualTo1, false>>
// type testGreaterThanOrEqualTo2 = GreaterThanOrEqualTo<11, 11>
// type resGreaterThanOrEqualTo2 = ExpectTrue<Equal<testGreaterThanOrEqualTo2, true>>
// type testGreaterThanOrEqualTo3 = GreaterThanOrEqualTo<12, 11>
// type resGreaterThanOrEqualTo3 = ExpectTrue<Equal<testGreaterThanOrEqualTo3, true>>