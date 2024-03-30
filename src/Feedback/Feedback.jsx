function Feedback({ feedbackTypes, totalFeedback }) {
  const good = feedbackTypes.good;
  const neutral = feedbackTypes.neutral;
  const bad = feedbackTypes.bad;

  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}

export default Feedback;