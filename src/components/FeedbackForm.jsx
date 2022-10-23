import { FaTelegramPlane } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  const { addHandler, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const inputHandler = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg("Please enter 10 characters");
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addHandler(newFeedback);
      }

      setText("");
    }
  };

  return (
    <div
      style={{ width: "90%", textAlign: "center", margin: "1rem auto" }}
      className="card"
    >
      <form onSubmit={submitHandler}>
        <h4 className="formHeader">How would you rate your service with us?</h4>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={inputHandler}
            value={text}
            placeholder="Write your review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            <FaTelegramPlane />
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </div>
  );
};

export default FeedbackForm;
