import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangedHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
    console.log(seletedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {props.items.map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.date}/>)}
    </Card>
  );
}

export default Expenses;
