import { createSlice } from '@reduxjs/toolkit';

//inital state distore
const initialState = {
    count: 0
}

//function counterSlice sebagai reducer yang akan dipanggil oleh dispatch
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload.amount;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;