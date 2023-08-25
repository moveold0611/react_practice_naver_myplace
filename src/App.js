import { Global } from "@emotion/react";
import { Reset } from "styled-reset";
import { GSCommon } from "./styles/common";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HeaderMiddle from "./components/HeaderMiddle/HeaderMiddle";
import HeaderFooter from "./components/HeaderFooter/HeaderFooter";
import Footer from "./components/Footer/Footer";
import TimeLine from "./pages/TimeLine/TimeLine";
import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review/Review";
import Feed from "./pages/Feed/Feed";
import Order from "./pages/Order/Order";
import Save from "./pages/Save/Save";

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
        <HeaderTop />
        <HeaderMiddle />
        <HeaderFooter />
        <Routes>
          <Route path="/timeline" element={<TimeLine />}/>
          <Route path="/feed" element={<Feed />}/>
          <Route path="/review" element={<Review />}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/save" element={<Save />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
