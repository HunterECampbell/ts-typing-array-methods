import { Equal, Expect } from './index'

export type IsNum<N> = N extends number ? true : false

type testIsNum1 = IsNum<1>
type resIsNUm1 = Expect<Equal<testIsNum1, true>>
type testIsNum2 = IsNum<undefined>
type resIsNUm2 = Expect<Equal<testIsNum2, false>>
type testIsNum3 = IsNum<'test'>
type resIsNUm3 = Expect<Equal<testIsNum3, false>>

export type ZeroToXArr<N extends number, Output extends number[] = []> =
  Output['length'] extends N
    ? [...Output, Output['length']]
    : ZeroToXArr<N, [...Output, Output['length']]>

type testZeroToX1 = ZeroToXArr<10>
type resZeroToX1 = Expect<Equal<testZeroToX1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>>
type testZeroToX2 = ZeroToXArr<11>
type resZeroToX2 = Expect<Equal<testZeroToX2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]>>
type testZeroToX3 = ZeroToXArr<0>
type resZeroToX23= Expect<Equal<testZeroToX3, [0]>>