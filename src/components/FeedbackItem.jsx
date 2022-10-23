import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteHandler, editFeedback } = useContext(FeedbackContext);
  return (
    <>
      <Card>
        <p>{item.text}</p>
        <div className="numCircle">
          <span className="numVal">{item.rating}</span>
        </div>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="#f87874" />
        </button>
        <button onClick={() => deleteHandler(item.id)} className="close">
          <FaTimes color="#f87874" />
        </button>
      </Card>
    </>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
