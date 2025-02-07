import "./App.css";
// import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Content from "./components/content";
import Surgery from './pages/surgery'
import Details from "./pages/details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          {/* <Route path="content" element={<Content />} /> */}
          <Route path="/services" element={<Details />} />
          <Route path="/surgery" element={<Surgery />} />
        </Route>
        <Route path="*" element={<div>404 Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
