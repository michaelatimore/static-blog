import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Mainpage } from "./components/Mainpage";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <div className="w-full bg-slate-200 dark:bg-slate-900">
      <div className="m-auto flex h-screen min-w-96 max-w-7xl flex-col bg-zinc-50 dark:bg-black dark:text-white">
        <Header setHeaderNavigation={setSelectedPost} />
        <div className="flex">
          <Sidebar setSelectedPost={setSelectedPost} />
          <Mainpage selectedPost={selectedPost} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
