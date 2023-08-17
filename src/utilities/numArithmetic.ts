import { Equal, ExpectTrue } from './index'

export type ConvertStringToNum<N extends string> =
  N extends '0' ? 0 :
  N extends '1' ? 1 :
  N extends '2' ? 2 :
  N extends '3' ? 3 :
  N extends '4' ? 4 :
  N extends '5' ? 5 :
  N extends '6' ? 6 :
  N extends '7' ? 7 :
  N extends '8' ? 8 :
  N extends '9' ? 9 : never;

type testConvertStringToNum1 = ConvertStringToNum<'1'>
type resConvertStringToNum1 = ExpectTrue<Equal<testConvertStringToNum1, 1>>
type testConvertStringToNum2 = ConvertStringToNum<'100'>
type resConvertStringToNum2 = ExpectTrue<Equal<testConvertStringToNum2, 100>>
type testConvertStringToNum3 = ConvertStringToNum<'test'>
type resConvertStringToNum3 = ExpectTrue<Equal<testConvertStringToNum3, never>>

export type ConvertToPositive<N extends number> =
  IsPositiveNum<N> extends false
  ? `${N}` extends `-${infer P}`
    ? ConvertStringToNum<P>
    : N
  : N

type testConvertToPositive1 = ConvertToPositive<-1>
type resConvertToPositive1 = ExpectTrue<Equal<testConvertToPositive1, 1>>
type testConvertToPositive2 = ConvertToPositive<-9>
type resConvertToPositive2 = ExpectTrue<Equal<testConvertToPositive2, 9>>
type testConvertToPositive3 = ConvertToPositive<1>
type resConvertToPositive3 = ExpectTrue<Equal<testConvertToPositive3, 1>>

export type IsNum<N> = N extends number ? true : false

type testIsNum1 = IsNum<1>
type resIsNUm1 = ExpectTrue<Equal<testIsNum1, true>>
type testIsNum2 = IsNum<undefined>
type resIsNUm2 = ExpectTrue<Equal<testIsNum2, false>>
type testIsNum3 = IsNum<'test'>
type resIsNUm3 = ExpectTrue<Equal<testIsNum3, false>>

export type IsPositiveNum<N extends number> = `${N}` extends `-${string}` ? false : true

type testIsPositiveNum1 = IsPositiveNum<10>
type resIsPositiveNum1 = ExpectTrue<Equal<testIsPositiveNum1, true>>
type testIsPositiveNum2 = IsPositiveNum<0>
type resIsPositiveNum2 = ExpectTrue<Equal<testIsPositiveNum2, true>>
type testIsPositiveNum3 = IsPositiveNum<-10>
type resIsPositiveNum3 = ExpectTrue<Equal<testIsPositiveNum3, false>>

export type ZeroToXArr<N extends number, Output extends number[] = []> =
  Output['length'] extends N
    ? [...Output, Output['length']]
    : ZeroToXArr<N, [...Output, Output['length']]>

type testZeroToX1 = ZeroToXArr<10>
type resZeroToX1 = ExpectTrue<Equal<testZeroToX1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>>
type testZeroToX2 = ZeroToXArr<11>
type resZeroToX2 = ExpectTrue<Equal<testZeroToX2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]>>
type testZeroToX3 = ZeroToXArr<0>
type resZeroToX23= ExpectTrue<Equal<testZeroToX3, [0]>>