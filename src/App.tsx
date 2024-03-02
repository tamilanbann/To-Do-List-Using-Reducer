import { useState } from "react";
import { Meteors } from "./ui/meteors";
import "./App.css";
import Todo from "./components/todo";

function App() {
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
  return (
    <section className=" h-screen w-full   bg-slate-900 text-white overflow-hidden ">
      <Todo />
      <Meteors number={50} />
    </section>
  );
}

export default App;
