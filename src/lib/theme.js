export const THEMES = {LIGHT: 'light', DARK: 'dark'};
export const DEFAULT_THEME = THEMES.LIGHT;
const STORAGE_KEY = 'theme';

const isValidTheme = (value) => value === THEMES.LIGHT || value === THEMES.DARK;

export function readStoredTheme() {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return isValidTheme(stored) ? stored : DEFAULT_THEME;
    } catch {
        // localStorage can throw (e.g. blocked storage / private mode).
        return DEFAULT_THEME;
    }
}

export function storeTheme(theme) {
    try {
        window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // Persisting is best-effort.
    }
}

export function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove(THEMES.LIGHT, THEMES.DARK);
    root.classList.add(theme);
    root.style.colorScheme = theme;
}

/**
 * Inline script for _document that applies the saved theme before the first
 * paint, so dark-mode users don't see a flash of the light theme.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='${THEMES.DARK}'&&t!=='${THEMES.LIGHT}')t='${DEFAULT_THEME}';var r=document.documentElement;r.classList.remove('${THEMES.LIGHT}','${THEMES.DARK}');r.classList.add(t);r.style.colorScheme=t;}catch(e){}})();`;
