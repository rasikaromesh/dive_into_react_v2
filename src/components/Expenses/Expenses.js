import React, { useState } from "react";

import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredData, setFilteredData] = useState(props.items);

  const filterChangedHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
    setFilteredData(
      props.items.filter(
        (item) => item.date.getFullYear().toString() === seletedYear
      )
    );
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList items={filteredData} />
    </Card>
  );
};

export default Expenses;
