import "./App.css";
// import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home"
import Layout from "./components/layout";
import Surgery from './pages/surgery'
import Details from "./pages/details";
import Blog from "./pages/blog";
import About from "./pages/About";
import Approach from "./pages/Approach";
import FeedbackAbout from "./pages/FeedbackAbout";
import TeamAbout from "./pages/TeamAbout";
import Appointment from "./pages/Appointment";
import Contact from "./pages/contact";
import Error from "./pages/error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/services" element={<Details />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/feedback" element={<FeedbackAbout />} />
          <Route path="/team" element={<TeamAbout />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
