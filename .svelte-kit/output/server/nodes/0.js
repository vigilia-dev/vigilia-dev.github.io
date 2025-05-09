import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.0ef66890.js","_app/immutable/chunks/287691d9.js","_app/immutable/chunks/db63223e.js","_app/immutable/chunks/6ad5a66a.js","_app/immutable/chunks/8b28b7c6.js","_app/immutable/chunks/ea1a53d8.js"];
export const stylesheets = ["_app/immutable/assets/0.da9a2e01.css"];
export const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.cdf69a43.woff2","_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.4ce643c3.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.60c8fe3e.woff2","_app/immutable/assets/fira-mono-cyrillic-400-normal.4849bad3.woff","_app/immutable/assets/fira-mono-greek-ext-400-normal.5de3ffa0.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.a89856e5.woff","_app/immutable/assets/fira-mono-greek-400-normal.61be7a00.woff2","_app/immutable/assets/fira-mono-greek-400-normal.9dc7671f.woff","_app/immutable/assets/fira-mono-symbols2-400-normal.8dca2c29.woff2","_app/immutable/assets/fira-mono-symbols2-400-normal.3f5552a4.woff","_app/immutable/assets/fira-mono-latin-ext-400-normal.2302dbfa.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.43892f57.woff","_app/immutable/assets/fira-mono-latin-400-normal.8d1e7535.woff2","_app/immutable/assets/fira-mono-latin-400-normal.b4ad2003.woff"];
