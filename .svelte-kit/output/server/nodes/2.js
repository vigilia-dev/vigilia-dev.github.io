import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BRQ_QsOa.js","_app/immutable/chunks/DemH0l8P.js","_app/immutable/chunks/ZAT9DQzf.js","_app/immutable/chunks/KfCfmEpA.js"];
export const stylesheets = [];
export const fonts = [];
