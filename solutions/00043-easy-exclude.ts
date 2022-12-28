/**
 * 00043 - Solution
 *
 * T에서 T와 U의 교집합을 뺀 나머지를 돌려주면 된다.
 * Union Type은 여러 타입 집합이 모인 하나의 "합집합" 이다.
 * 따라서 집합의 분배 법칙에 따라 Union Type의 구성 요소 각각에 조건을 대입할 수 있다.
 * MyExclude<'a' | 'b' | 'c', 'a'> = 'a' extends U ? never : 'a' | 'b' extends U ? never : 'b' | 'c' extends U ? never : 'c' = 'b' | 'c'
 *
 * TS 의 Union type 에서는 never 가 발생할 시 이를 통째로 버림.
 *
 * 그렇다면 왜 { type: "meetup", isVirtual: never } 이 아니라 통째로 never로 바뀐 걸까?
 * TS 3.9 이전까지는 Empty intersection이 존재하는 union case의 경우에는 위의 케이스로 처리했으나
 * 3.9 이후 버전에는 Empty intersection이 발생하는 case의 경우 그대로 never를 반환하도록 패치되었음.
 * 즉, A | (number & string) == A | never == any 다.
 */
// type VirtualEvent = isVirtual & TechEvent;
//                   = isVirtual & (Conference | Meetup)
//                   = (isVirtual & Conference) | (isVirtual & Meetup)
//                   = { type: "conference", isVirtual: boolean & true } | { type: "meetup", isVirtual: false & true };
//                   = { type: "conference", isVirtual: true } | never;
//                   = { type: "conference", isVirtual: true }

type MyExclude<T, U> = T extends U ? never : T;

/**
 *  Test Case
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
	Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
	Expect<
		Equal<MyExclude<string | number | (() => void), Function>, string | number>
	>
];
