import PropTypes from "prop-types";

const FeedbackStats = ({ total, average }) => {
  return (
    <div className="feedbackStatBar">
      <div className="totalFeedbacks">
        <span>
          {total} {total > 1 ? "Reviews" : "Review"}
        </span>
      </div>
      <div className="averageFeedbacks">
        <span>Average Ratings: {total < 1 ? "0" : average.toFixed(1)}</span>
      </div>
    </div>
  );
};

FeedbackStats.propTypes = {
  total: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired,
};

export default FeedbackStats;
