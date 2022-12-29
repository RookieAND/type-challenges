/**
 * 00116 - Solution
 *
 * template literal type을 사용하여 특정 문자열을 새롭게 대체시켜야 함.
 * 단, From 타입의 문자열이 빈 경우에는 이에 대한 예외 처리를 한번 해주어야 함.
 */

type Replace<S, From extends string, To extends string> = S extends `${infer Start}${From extends ''
    ? never
    : From}${infer Rest}`
    ? `${Start}${To}${Rest}`
    : S;

/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
    Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
    Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'', '', ''>, ''>>
];
