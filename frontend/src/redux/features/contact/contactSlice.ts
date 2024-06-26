'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

export type Contact = {
    _id: string;
    name: string;
    email: string;
    blocked: boolean;
    muted: boolean;
    picture: string;
    message: string;
    time: string;
    unreadMessage: number;
};

interface ContactState {
    contact: Contact;
    contactPanel: true | false;
}

const initialState: ContactState = {
    contact: {
        _id: '',
        name: '',
        email: '',
        picture: '',
        message: '',
        time: '',
        unreadMessage: 0,
        blocked: false,
        muted: false,
    },
    contactPanel: false,
};

export const contactSlice = createSlice({
    name: 'contact',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setContact: (state, action) => {
            state.contact = action.payload;
        },
        setContactPanel: (state, action: { payload: boolean }) => {
            state.contactPanel = action.payload;
        },
    },
});

export const { setContact, setContactPanel } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.contact.contact;

export default contactSlice.reducer;
