import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

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

      handleAdd(newFeedback);

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
