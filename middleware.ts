import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/clerk", "/api/webhook/stripe"],
  ignoredRoutes: ["/api/webhooks/clerk", "/api/webhook/stripe"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
