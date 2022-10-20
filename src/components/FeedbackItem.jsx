import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <>
      <Card>
        <p>{item.text}</p>
        <div className="numCircle">
          <span className="numVal">{item.rating}</span>
        </div>
        <button onClick={() => handleDelete(item.id)} className="close">
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
