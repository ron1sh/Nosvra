/**
 * Applies the stored theme before first paint so there is no flash of the
 * wrong colour scheme. Runs ahead of hydration; deliberately tiny. Defaults
 * to light when nothing is stored — there is no OS "system" mode.
 */
const script = `(function(){try{var k='nosvra-theme',s=localStorage.getItem(k)||'light',d=s==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.setAttribute('data-theme',s);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
