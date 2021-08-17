import React from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length) 
        return ( 
            <ul className={styles["expenses-list"]}>
                <li>
                    {props.items.map((expense) => (
                        <ExpenseItem
                            key = {expense.id}
                            title = {expense.title}
                            amount = {expense.amount}
                            date = {expense.date}
                        />
                    ))}
                </li>
            </ul>
        );

    return <h2 className={styles["expenses-list__fallback"]}>No Expenses Found</h2>;
}

export default ExpensesList;