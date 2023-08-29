import { Equal, Expect, Minus } from './utilities'

namespace lastIndexOf {
  type LastIndexOf<T extends unknown[], Value, CurrentIndex extends unknown[] = [...T]> =
    T extends [...infer First, infer Last]
      ? Last extends Value
        ? Minus<CurrentIndex['length'], 1>
        : LastIndexOf<First, Value, [...First]>
      : -1

  type Test = [1, 'a', 2, 'b', 3, 'c']

  type testLastIndexOf1 = LastIndexOf<Test, 1>
  type resLastIndexOf1 = Expect<Equal<testLastIndexOf1, 0>>
  type testLastIndexOf2 = LastIndexOf<Test, 'c'>
  type resLastIndexOf2 = Expect<Equal<testLastIndexOf2, 5>>
  type testLastIndexOf3 = LastIndexOf<Test, 2>
  type resLastIndexOf3 = Expect<Equal<testLastIndexOf3, 2>>
  type testLastIndexOf4 = LastIndexOf<[1, 1, 2], 1>
  type resLastIndexOf4 = Expect<Equal<testLastIndexOf4, 1>>
  type testLastIndexOf5 = LastIndexOf<Test, 'missing'>
  type resLastIndexOf5 = Expect<Equal<testLastIndexOf5, -1>>
  type testLastIndexOf6 = LastIndexOf<[], 'a'>
  type resLastIndexOf6 = Expect<Equal<testLastIndexOf6, -1>>
}