import { createSlice } from '@reduxjs/toolkit'

interface IUsers {
    id: number
    name: string
}

const initialState: IUsers[] = [
    { id: 0, name: 'Dude Lebowski' },
    { id: 1, name: 'Bunny Lebowski' },
    { id: 2, name: 'Jeffrey Lebowski' },
]

const usersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer