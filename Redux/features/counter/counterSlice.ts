import { RootState } from '@/Redux/store'
import { createSlice } from '@reduxjs/toolkit'

interface IState {
    count: number
}

const initialState: IState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count++ },
        decrement: (state) => { state.count-- },
        incrementByAmount: (state, action) => { state.count += action.payload }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer