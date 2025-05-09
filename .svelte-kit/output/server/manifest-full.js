export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "vigilia-dev.github.io/_app",
	assets: new Set([".nojekyll","404.html","CNAME","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.png","index.html","robots.txt","v-logo.svg"]),
	mimeTypes: {".html":"text/html",".png":"image/png",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.j2cGKixg.js",app:"_app/immutable/entry/app.BBGx7O0a.js",imports:["_app/immutable/entry/start.j2cGKixg.js","_app/immutable/chunks/Dc2ndvdi.js","_app/immutable/chunks/DemH0l8P.js","_app/immutable/entry/app.BBGx7O0a.js","_app/immutable/chunks/DemH0l8P.js","_app/immutable/chunks/ZAT9DQzf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
