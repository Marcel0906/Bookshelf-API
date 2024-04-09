import "./App.css";
import Add from "./pages/Add";
import Books from "./pages/Books";

// update needed to be added

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Add" element={<Add />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
