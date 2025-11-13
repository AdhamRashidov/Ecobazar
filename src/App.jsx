import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Detail } from "./pages/detail/detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="pages" element={<Pages />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
