export type ArrLength<T extends unknown[]> = T['length']

export type LastInArr<T extends unknown[]> = T extends [...infer _, infer Last] ? Last : never

export type LastInNumArr<T extends number[]> =
  T extends [...infer _, infer Last]
    ? Last extends number
      ? Last
      : never
    : never