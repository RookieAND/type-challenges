/**
 * 00015 - Solution
 *
 * 만약 해당 튜플이 마지막 원소 (U) 에 대한 타입 추론이 가능하다면 U를 반환.
 * 타입 추론에 실패할 경우는 빈 배열이 들어왔을 경우이므로, never를 반환해야 함.
 */

type Last<T extends readonly unknown[]> = T extends [...any, infer U] ? U : never;

/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<Last<[3, 2, 1]>, 1>>, Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>];
