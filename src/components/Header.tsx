// import { useState } from "react";

type HeaderProps = {
  setHeaderNavigation: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setHeaderNavigation }: HeaderProps) {
  function resetPageNumber() {
    setHeaderNavigation(0);
  }
  return (
    <header className="bg-black">
      <div className="container mx-auto flex items-center justify-between px-10 py-6">
        <div>
          <span
            onClick={resetPageNumber}
            className="bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer"
          >
            <a href="/Mainpage">React Blog</a>
          </span>
        </div>
        <nav className="flex items-center">
          <ul className="hidden items-center space-x-4 sm:flex">
            <li
              onClick={resetPageNumber}
              className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
            >
              <a href="/Mainpage">Home</a>
            </li>
          </ul>
          <div className="ml-8 hidden items-center space-x-4 md:flex lg:ml-12"></div>
        </nav>
      </div>
    </header>
  );
}
