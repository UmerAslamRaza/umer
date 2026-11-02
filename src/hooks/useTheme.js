import {useCallback, useEffect, useState} from 'react';
import {applyTheme, DEFAULT_THEME, readStoredTheme, storeTheme, THEMES} from '@/lib/theme';

/** Current colour theme plus a toggle that persists the choice. */
export default function useTheme() {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        const saved = readStoredTheme();
        setTheme(saved);
        applyTheme(saved);
    }, []);

    const toggleTheme = useCallback(() => {
        const next = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme(next);
        storeTheme(next);
        applyTheme(next);
    }, [theme]);

    return {theme, toggleTheme};
}
