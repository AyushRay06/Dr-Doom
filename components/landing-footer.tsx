import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 rounded-lg shadow m-4 dark:bg-gray-800 pt-2 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-start dark:text-gray-400">
          Who is to Blame? Yep, you guessed it this entire website is the
          brainchild of Ayush. If you love it, awesome! If not, well, you know
          who to blame.Connect with Ayush on for more of this creative genius.
        </span>
        <Link href="https://portfolio-website-nu-lyart.vercel.app/">
          <Avatar>
            <AvatarImage src="/ayush.jpeg" />
            <AvatarFallback>RAY</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </footer>
  )
}
