

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f985edbd.js","_app/immutable/chunks/287691d9.js","_app/immutable/chunks/db63223e.js","_app/immutable/chunks/a674c253.js","_app/immutable/chunks/e1458bda.js"];
export const stylesheets = [];
export const fonts = [];
