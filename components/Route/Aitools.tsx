'use client'
import { styles } from "@/utils/styles";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Aitools = (props: Props) => {
  return (
    <div className="w-full h-[100vh] items-center  relative p-4 xl:pt-[50px] lg:pt-[50px] 2xl:pt-[50px] md:pt-[50px] grid md:grid-cols-2 ">
      <div className="col-span-1 ">
        <div className="2xl:w-[60%]">
          <Button
            className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}
          >
            Tools
          </Button>
          <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
          Ai Image Generation Tools
          </h5>
          <p className={`${styles.paragraph} pb-5`}>
          One of the most prominent techniques in AI image generation is the use of Generative Adversarial Networks


          </p>
        </div>
      </div>
      <div className="col-span-1 w-full flex justify-center items-center">
        <Image
          src={"https://pixner.net/aikeu/assets/images/gen-thumb.png"}
          width={1000}
          height={700}
          alt=""
          className="md:w-[100%] md:ml-[-50px] 2xl:ml-[-90px] "
        />
      </div>
    </div>
  );
};

export default Aitools;
