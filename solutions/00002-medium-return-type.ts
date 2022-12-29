/**
 * 00002 - Solution
 *
 * 함수 타입의 경우 extends 를 통해 함수 타입을 받는지를 명확히 체크해야 한다.
 */

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer Return ? Return : any;
/**
 *  Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>,
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];

type ComplexObject = {
    a: [12, 'foo'];
    bar: 'hello';
    prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
