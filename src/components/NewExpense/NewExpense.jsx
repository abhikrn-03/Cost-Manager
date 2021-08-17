import React, { useState } from "react";
import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (ExpenseData) => {
        const ExpenseUnique = {
            id : Math.random().toString(),
            ...ExpenseData
        }
        props.onAddExpense(ExpenseUnique);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className={styles["new-expense"]}>
            {!isEditing && <button onClick={startEditingHandler} >ADD NEW EXPENSE</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;