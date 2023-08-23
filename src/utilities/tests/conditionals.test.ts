import { Equal, Expect } from '../index'
import { GreaterThan, GreaterThanOrEqualTo } from '../conditionals'

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