import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


import { LandingPage } from "./pages/LandingPage";
import { AddCreator } from "./pages/AddCreator";
import { EditCreator } from "./pages/EditCreator";
import { ViewCreator } from "./pages/ViewCreator";

import "./App.css";
import { FourOhFourPage } from "./pages/FourOhFourPage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace  />} />
          <Route path="/view-creator/:id" element={<ViewCreator />} />
          <Route path="/edit-creator/:id" element={<EditCreator />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/404" element={<FourOhFourPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
