import { Equal, Expect } from '../index'
import { ConvertStringToNum, ConvertToPositive, IsNum, IsPositiveNum, ZeroToXArr } from '../numSpecifics'

type testConvertStringToNum1 = ConvertStringToNum<'1'>
type resConvertStringToNum1 = Expect<Equal<testConvertStringToNum1, 1>>
type testConvertStringToNum2 = ConvertStringToNum<'11'>
type resConvertStringToNum2 = Expect<Equal<testConvertStringToNum2, 11>>
type testConvertStringToNum3 = ConvertStringToNum<'100'>
type resConvertStringToNum3 = Expect<Equal<testConvertStringToNum3, 100>>
type testConvertStringToNum4 = ConvertStringToNum<'test'>
type resConvertStringToNum4 = Expect<Equal<testConvertStringToNum4, never>>

type testConvertToPositive1 = ConvertToPositive<-1>
type resConvertToPositive1 = Expect<Equal<testConvertToPositive1, 1>>
type testConvertToPositive2 = ConvertToPositive<-9>
type resConvertToPositive2 = Expect<Equal<testConvertToPositive2, 9>>
type testConvertToPositive3 = ConvertToPositive<1>
type resConvertToPositive3 = Expect<Equal<testConvertToPositive3, 1>>

type testIsNum1 = IsNum<1>
type resIsNUm1 = Expect<Equal<testIsNum1, true>>
type testIsNum2 = IsNum<undefined>
type resIsNUm2 = Expect<Equal<testIsNum2, false>>
type testIsNum3 = IsNum<'test'>
type resIsNUm3 = Expect<Equal<testIsNum3, false>>

type testIsPositiveNum1 = IsPositiveNum<10>
type resIsPositiveNum1 = Expect<Equal<testIsPositiveNum1, true>>
type testIsPositiveNum2 = IsPositiveNum<0>
type resIsPositiveNum2 = Expect<Equal<testIsPositiveNum2, true>>
type testIsPositiveNum3 = IsPositiveNum<-10>
type resIsPositiveNum3 = Expect<Equal<testIsPositiveNum3, false>>

type testZeroToX1 = ZeroToXArr<10>
type resZeroToX1 = Expect<Equal<testZeroToX1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>>
type testZeroToX2 = ZeroToXArr<11>
type resZeroToX2 = Expect<Equal<testZeroToX2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]>>
type testZeroToX3 = ZeroToXArr<0>
type resZeroToX23= Expect<Equal<testZeroToX3, [0]>>