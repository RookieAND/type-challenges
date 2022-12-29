/**
 * 00003 - Solution
 *
 * as를 통해서 key Mapped Type 을 한번 더 re-mapped 한다.
 * 만약 key가 U에 소속되어 있다면 never를 리턴하고, 그렇지 않을 경우 key 값을 지정한다.
 */

type MyOmit<T, U extends keyof T> = { [K in keyof T as K extends U ? never : K]: T[K] };

/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
    completed: boolean;
}

interface Expected2 {
    title: string;
}
