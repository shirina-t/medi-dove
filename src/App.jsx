import "./App.css";
// import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Content from "./components/content";
import Surgery from './pages/surgery'
import Details from "./pages/details";
import Error from "./pages/error";

// import Contact from "./pages/contact";
// import Appointment from "./pages/appointment";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          {/* <Route path="content" element={<Content />} /> */}
          <Route path="/services" element={<Details />} />
          <Route path="/surgery" element={<Surgery />} />

          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} /> */}

          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
