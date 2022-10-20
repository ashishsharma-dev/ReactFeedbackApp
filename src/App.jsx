import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeebackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutApp from "./components/pages/AboutApp";
import AboutIcon from "./components/AboutIcon";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteHandler = (id) => {
    if (confirm("This will not be revovered...")) {
      let filtered = feedback.filter((elem) => {
        return elem.id != id;
      });
      setFeedback(filtered);
    }
  };

  let total = feedback.length;

  let sum = 0;
  feedback.forEach((item) => {
    sum += item.rating;
  });
  let average = sum / feedback.length;

  return (
    <>
      <Header name="Feedback UI" />

      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addHandler} />
                  <FeedbackStats total={total} average={average} />
                  <FeedbackList
                    handleDelete={deleteHandler}
                    feedback={feedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutApp />} />
          </Routes>
          <AboutIcon />
        </Router>
      </div>
    </>
  );
};

export default App;
