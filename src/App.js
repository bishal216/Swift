import {Routes, Route} from "react-router-dom";
import SwiftLP from "./pages/SwiftLP";

function App() {

  return (
    <Routes>
      <Route path="*" element={<SwiftLP />} />
    </Routes>
  );
}
export default App;
