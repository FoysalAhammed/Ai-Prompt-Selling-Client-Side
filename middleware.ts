import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/',"/api/get-top-sellers","/marketplace","/api/get-prompts","/api/get-prompt/:id","/prompt/:id" ]
});
 
export const config = {
      matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)","/api/get-top-sellers","/marketplace","/api/get-prompts","/api/get-prompt/:id","/prompt/:id"],
};
   