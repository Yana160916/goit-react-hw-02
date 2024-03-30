import { useState, useEffect } from 'react';
import './App.css';
import Feedback from '../Feedback/Feedback.jsx';
import Options from '../Option/Options.jsx';
import Notification from '../Notification/Notification.jsx';

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedbackTypes'));
    if (storedFeedback) {
      setFeedbackTypes(storedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes(prevTypes => ({
      ...prevTypes,
      [feedbackType]: prevTypes[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((feedbackTypes.good / totalFeedback) * 100);

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <div className="options-container">
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      </div>
      <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
      {totalFeedback === 0 && (
        <Notification message="No feedback collected yet." />
      )}
    </div>
  );
}

export default App;