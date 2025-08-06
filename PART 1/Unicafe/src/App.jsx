import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => setGood(good + 1);

  const handleNeutralFeedback = () => setNeutral(neutral + 1);

  const handleBadFeedback = () => setBad(bad + 1);

  const totalFeedback = () => {
    return good + bad + neutral;
  };

  const averageFeedback = () => {
    const total = good + bad + neutral;
    if (total === 0) return 0;
    const avg = (good - bad) / total;
    return avg;
  };

  const positiveFeedback = () => {
    const total = good + bad + neutral;
    if (total === 0) return 0;
    const posFeed = (good / total) * 100;
    return posFeed;
  };

  return (
    <div>
      <h1>Unicafe User Feedback</h1>
      <div>
        <Button
          handleClick={handleGoodFeedback}
          className={"btn-1"}
          text={"Good"}
        />
        <Button
          handleClick={handleNeutralFeedback}
          className={"btn-2"}
          text={"Neutral"}
        />
        <Button
          handleClick={handleBadFeedback}
          className={"btn-3"}
          text={"Bad"}
        />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          average={averageFeedback()}
          positiveFeedback={positiveFeedback()}
        />
      </div>
    </div>
  );
};

export default App;
