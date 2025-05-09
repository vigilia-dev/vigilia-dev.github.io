

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d09f3232.js","_app/immutable/chunks/287691d9.js","_app/immutable/chunks/db63223e.js","_app/immutable/chunks/6ad5a66a.js","_app/immutable/chunks/8b28b7c6.js"];
export const stylesheets = [];
export const fonts = [];
