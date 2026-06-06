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



</div>
    </>
  );
}
