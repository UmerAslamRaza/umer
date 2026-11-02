import useBreakpointValue from '@/hooks/useBreakpointValue';

// Breakpoints are module-level constants so their identity is stable; passing a
// fresh array/object each render would re-run the effect on every render.

const PROJECT_CARD_HEIGHTS = [
    {minWidth: 992, value: '417px'},
    {minWidth: 768, value: '360px'},
    {minWidth: 576, value: '300px'},
    {minWidth: 0, value: '220px'},
];

const lastValue = (breakpoints) => breakpoints[breakpoints.length - 1].value;

/** Thumbnail height for project cards. */
export const useProjectCardHeight = () =>
    useBreakpointValue(PROJECT_CARD_HEIGHTS, lastValue(PROJECT_CARD_HEIGHTS));
