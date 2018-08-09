import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense', () => {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});
test('should set up edit expense', () => {
    const action = editExpense( '123', { note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'new note value'
        }
    });
});

test('should set up add expense with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description : '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        } 
    })
})
