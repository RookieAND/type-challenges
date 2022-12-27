/**
 * 00016 - Solution
 *
 * 만약 해당 튜플이 마지막 원소 (W) 와 그 이전의 원소들 (U) 에 대한 타입 추론이 모두 가능하다면,
 * 마지막 원소 W를 제외한 나머지 원소의 집합 U를 반환하고, 그렇지 않은 경우 빈 배열을 반환해줌.
 */

type Pop<T extends readonly unknown[]> = T extends [...infer U, infer X] ? U : [];

/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
    Expect<Equal<Pop<[]>, []>>
];
