/**
 * 00008 - Solution
 *
 * readonly 처리를 해야 하는 속성과, 그렇지 않은 나머지 속성을 합쳐야 한다.
 *
 * TS 4.1부터는 as 키워드를 사용하여 mapped type을 다시 한번 re-mapped 할 수 있다.
 * 따라서 T 타입의 key 값을 모아 만든 K 타입을 conditional Type을 통해 다시 한번 필터링할 수 있다.
 * 순서는 T 타입의 키 값을 Union 한 K 타입을 만들고, 이 중에서 U 타입에 포함되지 않는 타입만 K로 재구성한다.
 */

type MyReadonly2<T, U extends keyof T = keyof T> = {
    [K in keyof T as K extends U ? never : K]: T[K];
} & { readonly [key in U]: T[key] };
/**
 *  Test Case
 */
import type { Alike, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
    Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;

interface Todo1 {
    title: string;
    description?: string;
    completed: boolean;
}

interface Todo2 {
    readonly title: string;
    description?: string;
    completed: boolean;
}

interface Expected {
    readonly title: string;
    readonly description?: string;
    completed: boolean;
}
