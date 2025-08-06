import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  bad,
  neutral,
  total,
  average,
  positiveFeedback,
}) => {
  if (total === 0) return <h3>No feedback given</h3>;
  return (
    <table className=".statistics_table">
      <tbody>
        <StatisticLine text={"Good"} value={good} />
        <StatisticLine text={"Neutral"} value={neutral} />
        <StatisticLine text={"Bad"} value={bad} />
        <StatisticLine text={"Total"} value={total} />
        <StatisticLine text={"Average"} value={average} />
        <StatisticLine text={"Positive"} value={positiveFeedback + " %"} />
      </tbody>
    </table>
  );
};

export default Statistics;
