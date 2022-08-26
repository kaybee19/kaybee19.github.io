import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

// Context wrapper
import { AppProvider } from "./AppContext";

// Comps
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home";
import Work from "./pages/work";
import Projects from "./pages/projects";
import NotFound from "./pages/NotFound";
// import Contact from './pages/contact';

function App() {
  return (
    <AppProvider>
      <React.Fragment>
        <Navbar />
        <div id="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
            {/*<Route path="contact" element={<Contact />} />*/}
          </Routes>
        </div>
      </React.Fragment>
    </AppProvider>
  );
}

export default App;
