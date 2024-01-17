import profilePic from "@/public/avatar.jpeg"
import Image from "next/image"

type Props = {}

const Biography = (props: Props) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight">
          Eric Martin
        </h1>
        <h2 className="text-zinc-700 dark:text-zinc-200 mb-4">
          Senior Frontend Developer
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-16">
          Building websites for the past decade. I also like consulting and
          teaching about React and Next.js.
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
  )
}

export default Biography
