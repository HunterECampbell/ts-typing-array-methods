import { IsNum, LastInNumArr, ZeroToXArr } from './index'

export type Equal<X, Y> =
  X extends Y
    ? Y extends X
      ? true
      : false
    : false;

export type Expect<T extends true> = T;

export type GreaterThan<N extends number, CompareN extends number> =
  IsNum<
    [...ZeroToXArr<CompareN>][LastInNumArr<[...ZeroToXArr<N>]>]
  > extends true ? false : true

export type GreaterThanOrEqualTo<N extends number, CompareN extends number> =
  Equal<ZeroToXArr<N>, ZeroToXArr<CompareN>> extends false
    ? GreaterThan<N, CompareN> extends true
      ? true
      : false
    : true

export type LessThan<N extends number, CompareN extends number> =
  IsNum<
    [...ZeroToXArr<N>][LastInNumArr<[...ZeroToXArr<CompareN>]>]
    > extends true ? false : true