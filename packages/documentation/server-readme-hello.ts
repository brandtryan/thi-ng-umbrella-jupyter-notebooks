// Tangled @ 2025-07-07T23:02:53-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/server/tpl.readme.md

import * as srv from "@thi.ng/server";

// all route handlers & interceptors receive a request context object
// here we define an extended/customized version
interface AppCtx extends srv.RequestCtx {
	session?: AppSession;
}

// customized version of the default server session type
interface AppSession extends srv.ServerSession {
	user?: string;
	locale?: string;
}

// interceptor for injecting/managing sessions
// by default uses in-memory storage/cache
const session = srv.sessionInterceptor<AppCtx, AppSession>({
	factory: srv.createSession
});

// create server with given config
const app = srv.server<AppCtx>({
	// global interceptors (used for all routes)
	intercept: [
		// log all requests (using server's configured logger)
		srv.logRequest(),
		// block known AI bots
		srv.rejectUserAgents(srv.USER_AGENT_AI_BOTS),
		// lookup/create sessions (using above interceptor)
		session,
		// ensure routes with `auth` flag have a logged-in user
		srv.authenticateWith<AppCtx>((ctx) => !!ctx.session?.user),
	],
	// route definitions (more can be added dynamically later)
	routes: [
		// define a route for serving static assets
		srv.staticFiles({
			// ensure only logged-in users can access
			auth: true,
			// use compression (if client supports it)
			compress: true,
			// route prefix
			prefix: "/assets",
			// map to current CWD
			rootDir: ".",
			// strategy for computing etags (optional)
			etag: srv.etagFileHash(),
			// route specific interceptors
			intercept: [srv.cacheControl({ maxAge: 3600 })],
		}),
		// define a dummy login route
		{
			id: "login",
			match: "/login",
			handlers: {
				// each route can specify handlers for various HTTP methods
				post: async (ctx) => {
					const { user, pass } = await srv.parseRequestFormData(ctx.req);
					ctx.logger.info("login details", user, pass);
					if (user === "thi.ng" && pass === "1234") {
						// create new session for security reasons (session fixation)
						const newSession = await session.replaceSession(ctx)!;
						newSession!.user = user;
						ctx.res.writeHead(200).end("logged in as " + user);
					} else {
						ctx.res.unauthorized({}, "login failed");
					}
				},
			},
		},
		// dummy logout route
		{
			id: "logout",
			match: "/logout",
			// use auth flag here to ensure route is only accessible if valid session
			auth: true,
			handlers: {
				get: async (ctx) => {
					// remove session & force expire session cookie
					await session.deleteSession(ctx, ctx.session!.id);
					ctx.res.writeHead(200).end("logged out");
				},
			},
		},
		// parametric route (w/ optional validator)
		{
			id: "hello",
			match: "/hello/?name",
			validate: {
				name: { check: (x) => /^[a-z]+$/i.test(x) },
			},
			handlers: {
				get: async ({ match, res }) => {
					res.writeHead(200, { "content-type": "text/plain" })
					   .end(`hello, ${match.params!.name}!`);
				},
			},
		},
		// another route to demonstrate role/usage of route IDs
		// here we simply attempt to redirect to the above `hello` route
		{
			id: "alias",
			match: "/alias/?name",
			handlers: {
				get: ({ server, match, res }) =>
					server.redirectToRoute(res, {
						id: "hello",
						params: match.params,
					}),
			},
		},
	],
});

await app.start();
// [INFO] server: starting server: http://localhost:8080