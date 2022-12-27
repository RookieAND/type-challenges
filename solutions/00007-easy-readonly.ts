/**
 * 00007 - Solution
 *
 * 인터페이스 내의 모든 property에 readonly 속성을 추가.
 * 따라서 T 의 key를 순회하면서 모든 속성에 readonly를 붙인다.
 */

type MyReadonly<T> = { readonly [i in keyof T]: T[i] };

/**
 *  00004 - Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}
