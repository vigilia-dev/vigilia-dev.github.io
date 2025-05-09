import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.c8a13f44.js","_app/immutable/chunks/287691d9.js","_app/immutable/chunks/db63223e.js","_app/immutable/chunks/ea1a53d8.js"];
export const stylesheets = [];
export const fonts = [];
