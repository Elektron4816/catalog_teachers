import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'filter',
    initialState: {
        data: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { setFilter } = userSlice.actions

export default userSlice.reducer
