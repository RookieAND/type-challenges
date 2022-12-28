/**
 * 00110 - Solution
 *
 * 맨 앞 글자만을 템플릿 리터럴 타입으로 체크하여 소문자 범주 내에 들어가는지를 판별
 * 이후 Capitalize 유틸리티 타입으로 앞 글자를 대문자로 변경 (이는 TS 자체에서 구현된 기능이므로 )
 */

type UnderCase =
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z";

type MyCapitalize<T extends string> =
	T extends `${infer First extends UnderCase}${infer Rest}`
		? `${Capitalize<First>}${Rest}`
		: T;

/**
 *  Test Case
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<MyCapitalize<"foobar">, "Foobar">>,
	Expect<Equal<MyCapitalize<"FOOBAR">, "FOOBAR">>,
	Expect<Equal<MyCapitalize<"foo bar">, "Foo bar">>,
	Expect<Equal<MyCapitalize<"">, "">>,
	Expect<Equal<MyCapitalize<"a">, "A">>,
	Expect<Equal<MyCapitalize<"b">, "B">>,
	Expect<Equal<MyCapitalize<"c">, "C">>,
	Expect<Equal<MyCapitalize<"d">, "D">>,
	Expect<Equal<MyCapitalize<"e">, "E">>,
	Expect<Equal<MyCapitalize<"f">, "F">>,
	Expect<Equal<MyCapitalize<"g">, "G">>,
	Expect<Equal<MyCapitalize<"h">, "H">>,
	Expect<Equal<MyCapitalize<"i">, "I">>,
	Expect<Equal<MyCapitalize<"j">, "J">>,
	Expect<Equal<MyCapitalize<"k">, "K">>,
	Expect<Equal<MyCapitalize<"l">, "L">>,
	Expect<Equal<MyCapitalize<"m">, "M">>,
	Expect<Equal<MyCapitalize<"n">, "N">>,
	Expect<Equal<MyCapitalize<"o">, "O">>,
	Expect<Equal<MyCapitalize<"p">, "P">>,
	Expect<Equal<MyCapitalize<"q">, "Q">>,
	Expect<Equal<MyCapitalize<"r">, "R">>,
	Expect<Equal<MyCapitalize<"s">, "S">>,
	Expect<Equal<MyCapitalize<"t">, "T">>,
	Expect<Equal<MyCapitalize<"u">, "U">>,
	Expect<Equal<MyCapitalize<"v">, "V">>,
	Expect<Equal<MyCapitalize<"w">, "W">>,
	Expect<Equal<MyCapitalize<"x">, "X">>,
	Expect<Equal<MyCapitalize<"y">, "Y">>,
	Expect<Equal<MyCapitalize<"z">, "Z">>
];
