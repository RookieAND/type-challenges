/**
 * 00014 - Solution
 *
 * 빈 배열인 경우 never, 아닐 경우 배열의 0번째 인덱스를 지정한다.
 */

type First<T extends readonly unknown[]> = T extends [] ? never : T[0];

/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
    // @ts-expect-error
    First<'notArray'>,
    // @ts-expect-error
    First<{ 0: 'arrayLike' }>
];
