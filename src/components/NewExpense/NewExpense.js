import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import AppButton from "../Common/AppButton";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
  };

  const onClickHandler = () => {
    setIsShowForm(!isShowForm);
  };

  const onCancelHandler = () => {
    setIsShowForm(false);
  };

  return (
    <div className="new-expense">
      {isShowForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
      {!isShowForm && (
        <AppButton onClick={onClickHandler} lable="Add new expense" />
      )}
    </div>
  );
};

export default NewExpense;
