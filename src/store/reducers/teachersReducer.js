import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'teacher',
    initialState: {
        data: null,
    },
    reducers: {
        setTeacher: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { setTeacher } = userSlice.actions

export default userSlice.reducer

