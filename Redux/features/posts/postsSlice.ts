import { createSlice } from '@reduxjs/toolkit'

interface IPosts {
    id: number
    title: string
    content: string
}

const initialState: IPosts[] = [
    { id: 1, title: 'Learning Redux Toolkit', content: 'This is a post about Redux Toolkit' },
    { id: 2, title: 'Slices....', content: 'The more I say slice, the more I want pizza' }
]

const postsSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer