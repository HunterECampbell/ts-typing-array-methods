import { Equal, Expect } from '../index'
import { IsStr } from '../strSpecifics'

type testIsStr1 = IsStr<'test'>
type resIsStr1 = Expect<Equal<testIsStr1, true>>
type testIsStr2 = IsStr<''>
type resIsStr2 = Expect<Equal<testIsStr2, true>>
type testIsStr3 = IsStr<1>
type resIsStr3 = Expect<Equal<testIsStr3, false>>
type testIsStr4 = IsStr<['test']>
type resIsStr4 = Expect<Equal<testIsStr4, false>>