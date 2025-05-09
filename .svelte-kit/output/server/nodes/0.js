import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BHmde1cV.js","_app/immutable/chunks/BagnA9mb.js","_app/immutable/chunks/DOOjs4CF.js","_app/immutable/chunks/D3W1ID7J.js","_app/immutable/chunks/BcTlvQ1b.js","_app/immutable/chunks/wS0KQy6w.js"];
export const stylesheets = ["_app/immutable/assets/0.BGslmHvN.css"];
export const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.B04YIrm4.woff2","_app/immutable/assets/fira-mono-all-400-normal.B2mvLtSD.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.36-45Uyg.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.CsqI23CO.woff2","_app/immutable/assets/fira-mono-greek-400-normal.C3zng6O6.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.D6XfiR-_.woff2","_app/immutable/assets/fira-mono-latin-400-normal.DKjLVgQi.woff2"];
