/**
 * 00011 - Solution
 *
 * Array의 index는 기본적으로 number다.
 * 따라서 T를 하나씩 순회하여 나온 값으로 key-value를 매핑해준다.
 */

type TupleToObject<T extends readonly (string | number)[]> = { [i in T[number]]: i };

/**
 *  00004 - Test Case
 */

import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, '2', 3, '4'] as const;

type cases = [
    Expect<
        Equal<
            TupleToObject<typeof tuple>,
            { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
        >
    >,
    Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
    Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
