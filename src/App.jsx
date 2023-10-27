import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"; // Remove 'Switch'
import List from "./components/List";
import ListingCard from "./components/ListingCard";
import Navabar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Navabar />
        </nav>

        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/card/:id" element={<ListingCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
