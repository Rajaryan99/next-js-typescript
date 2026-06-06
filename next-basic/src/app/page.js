import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>

      <a href={`/blogs`}>
        <button className="p-4 bg-blue-300 font-bold rounded-2xl mt-4"> Blog page</button>
      </a>
    </>
  );
}
