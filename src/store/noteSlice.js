import { createSlice } from "@reduxjs/toolkit";



export const noteSlice = createSlice({
    name: 'note',
    initialState: [
        {_id: 1, text: 'This is sample note.', isCompleted: false},
        {_id: 2, text: 'Make simple Notes app.', isCompleted: false},
        {_id: 3, text: 'Make shoping app.', isCompleted: false},
        {_id: 4, text: 'Build Dashboard of Shoping app.', isCompleted: false},
    ],
    reducers: {
        addNote: (state,action)=> [...state,action.payload],
        deleteNote: (state,action) => {
            const arr = [...state]
            const nwarr = arr.filter(item => item._id !== action.payload)
            return nwarr
        }
    }
})

export const { addNote,deleteNote } = noteSlice.actions