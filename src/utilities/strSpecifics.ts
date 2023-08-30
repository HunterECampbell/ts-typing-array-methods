export type IsStr<T> = T extends string ? true : false

export type StrLiteral = string | number | bigint | boolean | null | undefined