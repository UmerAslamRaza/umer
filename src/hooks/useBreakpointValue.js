import {useEffect, useState} from 'react';

/**
 * Returns the value of the first breakpoint whose `minWidth` the viewport meets.
 *
 * `breakpoints` must be ordered from widest to narrowest and should be defined
 * at module level so its identity is stable between renders.
 * `fallback` is used for the server render and first client render, which keeps
 * hydration consistent.
 */
export default function useBreakpointValue(breakpoints, fallback) {
    const [value, setValue] = useState(fallback);

    useEffect(() => {
        const update = () => {
            const match = breakpoints.find((bp) => window.innerWidth >= bp.minWidth);
            setValue(match ? match.value : fallback);
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [breakpoints, fallback]);

    return value;
}
