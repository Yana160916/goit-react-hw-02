import { useState } from 'react'
import './App.css';
import Feedback from './Feedback';
import Options from './Options';

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Feedback feedbackTypes={feedbackTypes} />
      <Options setFeedbackTypes={setFeedbackTypes} />
    </div>
  );
}

export default App;