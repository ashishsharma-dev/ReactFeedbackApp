import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeebackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutApp from "./components/pages/AboutApp";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";
const App = () => {
  return (
    <FeedbackProvider>
      <div className="container">
        <Router>
          <Header name="Feedback UI" />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutApp />} />
          </Routes>
          <AboutIcon />
        </Router>
      </div>
    </FeedbackProvider>
  );
};

export default App;
