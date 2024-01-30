import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/',"/api/get-top-sellers","/api/get-prompts","/api/get-prompt/:id","/prompt/:id" ]
});
 
export const config = {
      matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
   