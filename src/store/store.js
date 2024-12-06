import { configureStore } from '@reduxjs/toolkit'
import teacherReducer from './reducers/teachersReducer'
import filterReducer from './reducers/filterReducer'

export default configureStore({
    reducer: {
        teacher: teacherReducer,
        filter: filterReducer
    },
})