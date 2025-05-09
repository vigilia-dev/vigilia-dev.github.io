export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "vigilia.github.io/_app",
	assets: new Set([".nojekyll","CNAME","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.png","robots.txt","v-logo.svg"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.3778f03d.js",app:"_app/immutable/entry/app.92cb61b8.js",imports:["_app/immutable/entry/start.3778f03d.js","_app/immutable/chunks/e1458bda.js","_app/immutable/chunks/287691d9.js","_app/immutable/entry/app.92cb61b8.js","_app/immutable/chunks/287691d9.js","_app/immutable/chunks/db63223e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
