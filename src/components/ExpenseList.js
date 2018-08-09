import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {  //adding an individual expense
           return <ExpenseListItem key={expense.id} {...expense} /> 
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;

//or
// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     };
//     })(ExpenseList);
    
    
