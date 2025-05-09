

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d4c2f299.js","_app/immutable/chunks/287691d9.js","_app/immutable/chunks/db63223e.js","_app/immutable/chunks/cfdad426.js","_app/immutable/chunks/9ec0055b.js"];
export const stylesheets = [];
export const fonts = [];
