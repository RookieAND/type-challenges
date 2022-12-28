/**
 * 00106 - Solution
 *
 * 탬플릿 리터럴 타입을 활용하여 좌측, 우측에 제거해야 할 공백 및 이스케이프 문자가 있는지를 체크.
 * 만약 좌측에 공백이나 이스케이프 문자가 있다면 이를 제외한 나머지 R을 추론하여 재귀적으로 타입 추론.
 *
 * 템플릿 리터럴 타입 : https://toss.tech/article/template-literal-types
 * TS 4.1 부터 추가된 Intrinsic String Manipulation Types : https://driip.me/5c2887ac-6eb6-4490-9f99-295614db6335
 */

type TrimLeft<T extends string> = T extends `${" " | "\n" | "\t"}${infer R}`
	? TrimLeft<R>
	: T;

/**
 *  Test Case
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<TrimLeft<"str">, "str">>,
	Expect<Equal<TrimLeft<" str">, "str">>,
	Expect<Equal<TrimLeft<"     str">, "str">>,
	Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
	Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
	Expect<Equal<TrimLeft<"">, "">>,
	Expect<Equal<TrimLeft<" \n\t">, "">>
];
