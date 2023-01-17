import Image from "next/image";
import profilePic from "@/public/avatar.jpeg";

type Props = {};

const Biography = (props: Props) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-carbon-900 dark:text-carbon-50">
          Eric Martin
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Senior Frontend Developer
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Building websites for the past decade. With React, Next.js and
          TypeScript as my toolset, I build fast, accessible and performant
          websites that scales with my clients needs.
        </p>
      </div>
      <div className="flex-shrink-0 w-20 sm:w-[120px]">
        <Image
          className="rounded-full"
          src={profilePic}
          alt="Eric Martin"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
};

export default Biography;
