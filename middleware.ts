import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  '/orders(.*)',
  '/profile',
  '/cart',
  '/checkout',
  // '/onboarding',
])

export default clerkMiddleware((auth, req)=>{
  if(protectedRoutes(req)) auth().protect();
});



// export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};