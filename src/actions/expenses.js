import uuid from 'uuid';
import dataBase from '../firebase/firebase';


export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt
    }

    return dataBase.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return dataBase.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    });
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return dataBase.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// export const startSetExpenses;

export const startSetExpenses = () => {
  return (dispatch) => {
    return dataBase.ref('expenses').once('value').then((snapschot) => {
      const expenses = [];
      snapschot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      })
      dispatch(setExpenses(expenses))
    });
  };
};
