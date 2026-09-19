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
})();
`;
