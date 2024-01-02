import ExpenseDate from './ExpensesDate';
import Card from '../UI/Card';
import './Expensesetitem.css';
import React from 'react';
const Expensesetitem=(props)=>{
    const clickhandler=()=>{
        console.log('clicked !')
    }
   return (
       <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        <div className="expense-item_description">
            <h2>{props.title}</h2>
            <div className="expense-item_price">${props.amount}</div>
        </div>
        <button onClick={clickhandler}>Click to Delete</button>

        </Card>
       
    );
}

export default Expensesetitem;