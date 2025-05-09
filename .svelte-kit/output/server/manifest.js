export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "vigilia.github.io/_app",
	assets: new Set([".nojekyll","404.html","CNAME","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.png","index.html","robots.txt","v-logo.svg"]),
	mimeTypes: {".html":"text/html",".png":"image/png",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.xYggmDIx.js",app:"_app/immutable/entry/app.BwOC4og3.js",imports:["_app/immutable/entry/start.xYggmDIx.js","_app/immutable/chunks/BbyzkJr4.js","_app/immutable/chunks/DemH0l8P.js","_app/immutable/entry/app.BwOC4og3.js","_app/immutable/chunks/DemH0l8P.js","_app/immutable/chunks/Bs66mxU0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/vigilia.github.io/","/vigilia.github.io/about"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
