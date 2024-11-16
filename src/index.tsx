import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Lesson01 from "./lessons/lesson01/Lesson01";
import HomePage from "./components/HomePage/HomePage";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Homework03 from "./homeworks/homework03/Homework03";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="lesson-1" element={<Lesson01 />} />
        <Route path="lesson-10" element={<Lesson10 />} />
        <Route path="homework-3" element={<Homework03/>} />

      </Route>
    </Routes>
  </HashRouter>
);
