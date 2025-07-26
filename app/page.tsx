import Link from "next/link";
import MyPic from "./components/MyPic";

export default function Home() {
  return (
    <div>
      <div className="px-6 mt-7 mx-auto max-w-screen-md">
        <main className="border border-gray-300 rounded-lg p-4">
          <MyPic />
          <p className="mt-12 mb-3 text-3xl text-center dark:text-white">
            Hello there, I&apos;m <span className="font-bold">Aarabdh</span>!
          </p>
          <p className="mb-12 text-xl text-center dark:text-white">
            This site is under maintenance,
            <br />
            but feel free to browse around!
            <br /><br />
            Wanna contact me? <br />
            <Link href="/contact" className="underline">Hit me up!</Link>
          </p>
          <div className="ml-6 mb-5">
            <Link href="https://clicks.barbaad.dev/" className="underline text-2xl dark:text-white/90">
              Clicks</Link>
          </div>
          <div className="ml-6 mb-5">
            <Link href="/game-of-life" className="underline text-2xl dark:text-white/90">
              Conway&apos;s Game of Life</Link>
          </div>
          <div className="ml-6 mb-5">
            <Link href="/posts" className="underline text-2xl dark:text-white/90">
              Blog Posts</Link>
          </div>
          <div className="ml-6 mb-5">
            <Link href="/resume" className="underline text-2xl dark:text-white/90">
              My Resume</Link>
          </div>
        </main>
      </div>
    </div>
  );
}
