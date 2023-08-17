import { Equal, ExpectTrue } from '../index'
import { GreaterThan, GreaterThanOrEqualTo } from '../conditionals'

type testGreaterThan1 = GreaterThan<10, 11>
type resGreaterThan1 = ExpectTrue<Equal<testGreaterThan1, false>>
type testGreaterThan2 = GreaterThan<11, 11>
type resGreaterThan2 = ExpectTrue<Equal<testGreaterThan2, false>>
type testGreaterThan3 = GreaterThan<12, 11>
type resGreaterThan3 = ExpectTrue<Equal<testGreaterThan3, true>>

type testGreaterThanOrEqualTo1 = GreaterThanOrEqualTo<10, 11>
type resGreaterThanOrEqualTo1 = ExpectTrue<Equal<testGreaterThanOrEqualTo1, false>>
type testGreaterThanOrEqualTo2 = GreaterThanOrEqualTo<11, 11>
type resGreaterThanOrEqualTo2 = ExpectTrue<Equal<testGreaterThanOrEqualTo2, true>>
type testGreaterThanOrEqualTo3 = GreaterThanOrEqualTo<12, 11>
type resGreaterThanOrEqualTo3 = ExpectTrue<Equal<testGreaterThanOrEqualTo3, true>>