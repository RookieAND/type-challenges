/**
 * 00191 - Solution
 *
 * 함수 타입을 선언하고 매개변수를 병합하고 싶을 때는 ...args 인자 내 배열에 새로운 값을 추가하여 넣어준다.
 * 이후 spread 문법을 활용하여 추가된 매개변수를 나열하여 return 하고, 함수를 extends 하지 않으면 never를 반환한다.
 */

type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
	...args: [...infer P]
) => infer R
	? (...args: [...P, A]) => R
	: never;

/**
 *  Test Case
 */

import type { Equal, Expect } from "@type-challenges/utils";

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
	Expect<Equal<Case1, Result1>>,
	Expect<Equal<Case2, Result2>>,
	// @ts-expect-error
	AppendArgument<unknown, undefined>
];
