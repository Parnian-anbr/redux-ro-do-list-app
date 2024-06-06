import { configureStore, createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
    name: 'toDo',
    loading: false,
    initialState: [],
    reducers: {
        addItemTolist: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteItemfromList: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1)
            }
        }
    },
})

export const toDoListStore = configureStore({
    reducer: {
        toDolistReducer: toDoSlice.reducer,
    }
});




