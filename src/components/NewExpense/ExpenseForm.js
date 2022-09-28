import React, { useState } from "react";

import AppButton from "../Common/AppButton";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    console.log("submot");
    event.preventDefault();
    props.onSaveExpenseData({
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    });

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="expense-form__control expense-form__actions-group">
        <AppButton
          className="expense-form__actions"
          type="button"
          onClick={props.onCancel}
          lable="Cancel"
        />
        <AppButton
          type="submit"
          lable="Add Expense"
          className="expense-form__actions"
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
