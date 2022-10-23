import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let totalRating = 0;
  let average = 0;

  feedback.forEach((elem) => {
    totalRating += elem.rating;
  });

  average = (totalRating / feedback.length).toFixed(1);
  console.log(average);

  // let average =
  //   feedback.reduce((acc, curr) => {
  //     return acc + curr.rating;
  //   }, 0) / feedback.length;

  // let average =

  // feedback.forEach((elem) => {
  //   totalRating += elem.rating;
  // });
  // let averageRating = 0;

  // let totalRating = feedback.reduce((acc, currValue) => {
  //   return acc + currValue.rating;
  // }, 0);

  // averageRating = totalRating / feedback.length;
  return (
    <div className="feedbackStatBar">
      <div className="totalFeedbacks">
        <span>
          {feedback.length} {feedback.length > 1 ? "Reviews" : "Review"}
        </span>
      </div>
      <div className="averageFeedbacks">
        <span>Average Rating: {average}</span>
      </div>
    </div>
  );
};

export default FeedbackStats;
