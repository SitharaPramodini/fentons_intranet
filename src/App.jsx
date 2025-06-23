// Alternative CSS-only approach using react-transition-group
// npm install react-transition-group

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Login from "./pages/Login";
import LoginNew from "./pages/LoginNew";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="route-container">
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={600}
      >
        <div className="page-wrapper">
          <Routes location={location}>
            <Route path="/home" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/" element={<LoginNew />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;