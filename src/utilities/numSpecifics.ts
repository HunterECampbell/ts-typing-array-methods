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

export type ConvertToPositive<N extends number> =
  IsPositiveNum<N> extends false
  ? `${N}` extends `-${infer P}`
    ? ConvertStringToNum<P>
    : N
  : N

export type IsNum<N> = N extends number ? true : false

export type IsPositiveNum<N extends number> = `${N}` extends `-${string}` ? false : true

export type ZeroToXArr<N extends number, Output extends number[] = []> =
  Output['length'] extends N
    ? [...Output, Output['length']]
    : ZeroToXArr<N, [...Output, Output['length']]>