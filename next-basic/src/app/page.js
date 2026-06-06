import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
    <div className=" h-screen w-full flex flex-col">
      <a href={`/blogs`}>
        <button className="p-4 bg-blue-300 font-bold rounded-2xl mt-4"> Blog page</button>
      </a>

<div className="flex bg-gray-800 justify-center items-center  bottom-0 fixed w-full p-5">
      <footer>
            <h2 className="font-bold text-2xl">Made with Next.js and Designed with TailwindCSS</h2> 
      </footer>
</div>

</div>
    </>
  );
}
