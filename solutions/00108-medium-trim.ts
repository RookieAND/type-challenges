/**
 * 00108 - Solution
 *
 * 탬플릿 리터럴 타입을 활용하여 좌측, 우측에 제거해야 할 공백 및 이스케이프 문자가 있는지를 체크.
 * 만약 좌측, 혹은 우측에 공백이나 이스케이프 문자가 있다면 이를 제외한 나머지 R을 추론하여 재귀적으로 타입 추론.
 * 양방향에 대한 Trim 작업을 수행해야 하므로, 우측부터 먼저 제거한 후 좌측을 제거하는 식으로 순서 진행
 *
 * 템플릿 리터럴 타입 : https://toss.tech/article/template-literal-types
 * TS 4.1 부터 추가된 Intrinsic String Manipulation Types : https://driip.me/5c2887ac-6eb6-4490-9f99-295614db6335
 */

type A<T extends string> = Capitalize<T>;

type TrimLeft<T extends string> = T extends
	| ` ${infer R}`
	| `\n${infer R}`
	| `\t${infer R}`
	? TrimLeft<R>
	: T;
type TrimRight<T extends string> = T extends
	| `${infer R} `
	| `${infer R}\n`
	| `${infer R}\t`
	? TrimRight<R>
	: T;
type Trim<T extends string> = TrimLeft<TrimRight<T>>;

/**
 *  Test Case
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<Trim<"str">, "str">>,
	Expect<Equal<Trim<" str">, "str">>,
	Expect<Equal<Trim<"     str">, "str">>,
	Expect<Equal<Trim<"str   ">, "str">>,
	Expect<Equal<Trim<"     str     ">, "str">>,
	Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
	Expect<Equal<Trim<"">, "">>,
	Expect<Equal<Trim<" \n\t ">, "">>
];
