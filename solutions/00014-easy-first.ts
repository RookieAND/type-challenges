/**
 * 00014 - Solution
 *
 * 첫 번째 방법 (easy)
 * 단순하게 현재 T가 빈 배열인 경우 never, 아닐 경우 배열의 0번째 인덱스를 지정한다.
 *
 * 두 번째 방법 (normal)
 * 만약 해당 튜플이 첫번째 원소 (U) 에 대한 타입 추론이 가능하다면 0번째 인덱스 값을 반환.
 * 타입 추론에 실패할 경우는 오직 빈 배열이 들어왔을 경우이므로, never를 반환해야 함.
 */

type First<T extends readonly unknown[]> = T extends [] ? never : T[0];
type First2<T extends readonly unknown[]> = T extends readonly [infer U, ...any] ? U : never;

/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
    Expect<Equal<First2<[3, 2, 1]>, 3>>,
    Expect<Equal<First2<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First2<[]>, never>>,
    Expect<Equal<First2<[undefined]>, undefined>>
];

type errors = [
    // @ts-expect-error
    First<'notArray'>,
    // @ts-expect-error
    First<{ 0: 'arrayLike' }>
];
