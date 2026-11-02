/** Parse "YYYY-MM" into a month index (years * 12 + month). */
const toMonthIndex = (value) => {
    const [year, month] = value.split('-').map(Number);
    return year * 12 + (month - 1);
};

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

/**
 * Human-readable length of a period, counting both the start and end month.
 * formatDuration('2025-09', '2026-10') -> "1 yr 2 mos"
 */
export function formatDuration(start, end) {
    const months = toMonthIndex(end) - toMonthIndex(start) + 1;
    const years = Math.floor(months / 12);
    const rest = months % 12;

    return [
        years > 0 && plural(years, 'yr'),
        rest > 0 && plural(rest, 'mo'),
    ].filter(Boolean).join(' ');
}
