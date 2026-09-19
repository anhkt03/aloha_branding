export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "aloha-theme";

/**
 * Inline script (stringified) that runs before paint to set the theme
 * attribute, preventing a flash of the wrong theme. Uses the stored choice,
 * otherwise the OS preference.
 */
export const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
  try {
    var seg = location.pathname.split('/')[1];
    if (['vi','en','ja','ko'].indexOf(seg) !== -1) document.documentElement.lang = seg;
  } catch (e) {}
})();
`;

/** Read the effective theme on the client: stored choice, else OS preference. */
export function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* storage unavailable */
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

/** Persist and apply a theme to the document root. */
export function persistTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — the attribute still applies */
  }
}
