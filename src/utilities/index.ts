export * from './arrSpecifics'
export * from './conditionals'
export * from './numArithmetic'

export type Equal<X, Y> =
  X extends Y
    ? Y extends X
      ? true
      : false
    : false;

export type Expect<T extends true> = T;
