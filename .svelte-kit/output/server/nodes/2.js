import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.oOUOTSan.js","_app/immutable/chunks/CYEMZujY.js","_app/immutable/chunks/G_5JXgeD.js","_app/immutable/chunks/BOtjs7Yl.js"];
export const stylesheets = [];
export const fonts = [];
