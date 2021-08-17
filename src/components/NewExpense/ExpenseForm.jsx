import React, { useState } from "react";
import styles from "./ExpenseForm.module.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : "",
    //     enteredAmount : "",
    //     enteredDate : ""
    // });
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });
        // When the changed state depends on the previous state
        // setUserInput((prevState) => {
        //     return {
        //     ...prevState, enteredTitle : event.target.value
        //     }
        // });
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // });
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        // console.log(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        props.onSaveExpenseData(expenseData);
    };

    return (
        <form onSubmit={submitHandler} >
            <section className={styles["new-expense__controls"]}>
                <div className={styles["new-expense__control"]}>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className={styles["new-expense__control"]}>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className={styles["new-expense__control"]}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </section>
            <div className={styles["new-expense__actions"]}>
                <button onClick={props.onCancel} >CANCEL</button>
                <button type="submit">ADD EXPENSE</button>
            </div>
        </form>
    );
};

export default ExpenseForm;