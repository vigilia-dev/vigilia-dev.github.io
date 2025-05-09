export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","404.html","CNAME","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.png","index.html","robots.txt","v-logo.svg"]),
	mimeTypes: {".html":"text/html",".png":"image/png",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.LRhtKbHs.js",app:"_app/immutable/entry/app.C29pdmOk.js",imports:["_app/immutable/entry/start.LRhtKbHs.js","_app/immutable/chunks/BcTlvQ1b.js","_app/immutable/chunks/BagnA9mb.js","_app/immutable/chunks/wS0KQy6w.js","_app/immutable/entry/app.C29pdmOk.js","_app/immutable/chunks/BagnA9mb.js","_app/immutable/chunks/DOOjs4CF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
