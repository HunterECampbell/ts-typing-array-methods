import { Equal, Expect } from '../index'
import { GreaterThan, GreaterThanOrEqualTo, LessThan } from '../conditionals'

type testGreaterThan1 = GreaterThan<10, 11>
type resGreaterThan1 = Expect<Equal<testGreaterThan1, false>>
type testGreaterThan2 = GreaterThan<11, 11>
type resGreaterThan2 = Expect<Equal<testGreaterThan2, false>>
type testGreaterThan3 = GreaterThan<12, 11>
type resGreaterThan3 = Expect<Equal<testGreaterThan3, true>>

type testGreaterThanOrEqualTo1 = GreaterThanOrEqualTo<10, 11>
type resGreaterThanOrEqualTo1 = Expect<Equal<testGreaterThanOrEqualTo1, false>>
type testGreaterThanOrEqualTo2 = GreaterThanOrEqualTo<11, 11>
type resGreaterThanOrEqualTo2 = Expect<Equal<testGreaterThanOrEqualTo2, true>>
type testGreaterThanOrEqualTo3 = GreaterThanOrEqualTo<12, 11>
type resGreaterThanOrEqualTo3 = Expect<Equal<testGreaterThanOrEqualTo3, true>>

type testLessThan1 = LessThan<10, 11>
type resLessThan1 = Expect<Equal<testLessThan1, true>>
type testLessThan2 = LessThan<11, 11>
type resLessThan2 = Expect<Equal<testLessThan2, false>>
type testLessThan3 = LessThan<12, 11>
type resLessThan3 = Expect<Equal<testLessThan3, false>>