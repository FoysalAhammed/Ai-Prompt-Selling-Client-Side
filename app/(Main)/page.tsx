import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();
  console.log(data);
  return (
    <div>
      <RoutePage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
};

export default Page;
