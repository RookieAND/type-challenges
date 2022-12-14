/**
 * 00004 - Solution
 * 
 * T : 특정 속성들이 담긴 인터페이스
 * U : T 의 속성들 중 일부를 Union Type 으로 구성한 타입.
 */

type MyPick<T, U extends keyof T> = { [att in U]: T[att] };

/**
 *  00004 - Test Case
 */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
}

interface Expected2 {
    title: string;
    completed: boolean;
}