

const Feedback = ({ feedbackTypes, totalFeedback, positivePercentage }) => {
  return (
    <div className="feedback-container">
      <h2>Feedback Summary</h2>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;