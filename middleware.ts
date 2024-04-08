import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // make the route accessible to both signed in and signed out users
  publicRoutes: ["/"],

  // prevent auth form running at all
  //ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"]
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};