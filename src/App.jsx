import "./App.css";
// import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Content from "./components/content";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          {/* <Route path="content" element={<Content />} /> */}
        </Route>
        <Route path="*" element={<div>404 Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
