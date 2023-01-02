/**
 * 00189 - Solution
 *
 * 두 가지 타입의 유니온 타입에 소속되어 있어야 하고, 각 타입 (Promise, {them: (onfulfilled: (arg: any) => any) => any}) 에 따른 케이스를 구한다.
 * Promise 의 경우 제네릭 타입이 Promise인지, 아닌지에 따라서 추가로 재귀 탐색을 할지 타입을 돌려줄지를 결정한다.
 */

type MyAwaited<
	T extends Promise<any> | { then: (onfulfilled: (arg: any) => any) => any }
> = T extends Promise<infer U>
	? U extends Promise<any>
		? MyAwaited<U>
		: U
	: T extends { then: (onfulfilled: (arg: infer X) => any) => any }
	? X
	: never;

/**
 *  00004 - Test Case
 */

import type { Equal, Expect } from "@type-challenges/utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
	Expect<Equal<MyAwaited<X>, string>>,
	Expect<Equal<MyAwaited<Y>, { field: number }>>,
	Expect<Equal<MyAwaited<Z>, string | number>>,
	Expect<Equal<MyAwaited<Z1>, string | boolean>>,
	Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;
