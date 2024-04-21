// import { useEffect } from "react";
// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import SwiftLP from "./pages/SwiftLP";
// import IPhone13Mini from "./pages/IPhone13Mini";

// function App() {
//   const action = useNavigationType();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "";
//         metaDescription = "";
//         break;
//       case "/iphone-13-mini-1":
//         title = "";
//         metaDescription = "";
//         break;
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag = document.querySelector(
//         'head > meta[name="description"]'
//       );
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

//   return (
//     <Routes>
//       <Route path="/" element={<SwiftLP />} />
//       <Route path="/iphone-13-mini-1" element={<IPhone13Mini />} />
//     </Routes>
//   );
// }
// export default App;

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useMediaQuery } from "@mui/material"; // or "@material-ui/core" for Material-UI

import SwiftLP from "./pages/SwiftLP";
import IPhone13Mini from "./pages/IPhone13Mini";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-mini-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const isMobile = useMediaQuery("(max-width:450px)");

  return (
    <Routes>
      <Route path="/" element={isMobile ? <IPhone13Mini /> : <SwiftLP />} />
      <Route path="/iphone-13-mini-1" element={<IPhone13Mini />} />
    </Routes>
  );
}
export default App;
