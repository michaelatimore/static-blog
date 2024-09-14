import { useState } from "react";
import { data } from "../posts/posts";
import { v4 as uuidv4 } from "uuid";

type SidebarProps = {
  setSelectedPost: React.Dispatch<React.SetStateAction<number>>;
};

export function Sidebar({ setSelectedPost }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function selectPost(selection: number) {
    setSelectedPost(selection);
  }
  return (
    <>
      <button
        className="rounded-m absolute right-8 top-6 bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text p-2 font-bold text-transparent md:hidden"
        onClick={toggleSidebar}
      >
        Sidebar
      </button>
      <aside
        className={
          (isOpen ? "block" : "hidden") +
          " absolute left-0 top-20 z-50 w-64 bg-black p-4 text-white md:static md:block"
        }
      >
        <div className="mx-auto flex items-center justify-around rounded-lg bg-white px-1">
          <input
            type="text"
            placeholder="search"
            className="w-full rounded-md bg-gray-100 p-2 outline-none ring-indigo-700"
          />
          <span className="bg-gray-100 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <div className="rounded-md bg-white">
          <h1 className="my-4 cursor-pointer rounded-md border-b-2 bg-white py-2 text-center text-xl text-gray-600">
            Posts
          </h1>
          <div className="list-none rounded-md bg-white text-center">
            {data.map((_, index) => {
              const postNumber = index + 1;
              return (
                <li
                  key={uuidv4()}
                  className="text-1xl border-b-2 bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text py-3 font-bold text-transparent hover:cursor-pointer"
                  onClick={() => {
                    selectPost(postNumber);
                  }}
                >
                  Post {postNumber}
                </li>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
