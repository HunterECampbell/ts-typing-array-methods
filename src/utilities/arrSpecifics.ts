import { Equal, ExpectTrue, GreaterThan } from './index'

export type ArrLength<T extends unknown[]> = T['length']

type testArrLength1 = ArrLength<[1, 2, 3]>
type resArrLength1 = ExpectTrue<Equal<testArrLength1, 3>>
type testArrLength2 = ArrLength<[1, 2, 3, 4]>
type resArrLength2 = ExpectTrue<Equal<testArrLength2, 4>>
type testArrLength3 = ArrLength<[]>
type resArrLength3 = ExpectTrue<Equal<testArrLength3, 0>>

// export type LastInArr<T extends unknown[]> =
//   T extends [...infer _, infer Last] ? Last : never

// type testLastInArr1 = LastInArr<[1, 2, 3]>
// type resLastInArr1 = ExpectTrue<Equal<testLastInArr1, 3>>
// type testLastInArr2 = LastInArr<['a', 'b', 'c']>
// type resLastInArr2 = ExpectTrue<Equal<testLastInArr2, 'c'>>
// type testLastInArr3 = LastInArr<[{ name: 'Bob', id: 1 }, { name: 'Billy', id: 2 }]>
// type resLastInArr3 = ExpectTrue<Equal<testLastInArr3, { name: 'Billy', id: 2 }>>
// type testLastInArr4 = LastInArr<[1]>
// type resLastInArr4 = ExpectTrue<Equal<testLastInArr4, 1>>
// type testLastInArr5 = LastInArr<[]>
// type resLastInArr5 = ExpectTrue<Equal<testLastInArr5, never>>

export type LastInNumArr<T extends number[]> =
  T extends [...infer _, infer Last]
    ? Last extends number
      ? Last
      : never
    : never

type testLastInNumArr1 = LastInNumArr<[1, 2, 3]>
type resLastInNumArr1 = ExpectTrue<Equal<testLastInNumArr1, 3>>
// @ts-expect-error - Purposefully passing in a string[]
type testLastInNumArr2 = LastInNumArr<['a', 'b', 'c']>
type resLastInNumArr2 = ExpectTrue<Equal<testLastInNumArr2, never>>