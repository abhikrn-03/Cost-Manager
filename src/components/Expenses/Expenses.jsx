import React, { useState } from "react";
import styles from "./Expenses.module.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const changeYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
       return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <Card className={styles.expenses}>
            <ExpensesFilter 
                selectedYear={filteredYear} 
                onChangeYear={changeYearHandler} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;